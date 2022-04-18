import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { AlertModel } from './alert-model';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alertSubject = new Subject<AlertModel>();
  private alertClearing = new Subject<number>();

  alertTypes = new Array('success', 'info', 'warning', 'danger', 'primary', 'secondary', 'light', 'dark');

  getAlertObservable(): Observable<AlertModel> {
    return this.alertSubject.asObservable();
  }

  getAlertClearingObservable(): Observable<number> {
    return this.alertClearing.asObservable();
  }

  alertMessage(msg: string, type: string = 'success', id = -1) {
    if (this.alertTypes.every(t => t !== type)) {
        console.error("Wrong alert type!");
        return;
    }

    this.alertSubject.next({
      type: type,
      message: msg,
      id: id
    });
  }

  clearAlerts(id: number = -1) {
    this.alertClearing.next(id);
  }

  constructor() { }
}
