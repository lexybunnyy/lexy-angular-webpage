import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { AlertModel } from './alert-model';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alertSubject = new Subject<AlertModel>();

  alertTypes = new Array('success', 'info', 'warning', 'danger', 'primary', 'secondary', 'light', 'dark');

  getAlertObservable(): Observable<AlertModel> {
    return this.alertSubject.asObservable();
  }

  alertMessage(msg: string, type: string = 'success') {
    if (this.alertTypes.every(t => t !== type)) {
        console.error("Wrong alert type!");
        return;
    }

    this.alertSubject.next({
      type: type,
      message: msg
    });
  }

  constructor() { }
}
