import { Component, OnInit } from '@angular/core';
import { AlertService } from '../_services/alert.service';
import { AlertModel } from '../_services/alert-model';


@Component({
  selector: 'alert-list',
  templateUrl: './alert-list.component.html',
  styleUrls: ['./alert-list.component.scss']
})
export class AlertListComponent {

  alerts: Array<AlertModel> = new Array();
  
  constructor(alertService: AlertService) {
    this.alerts = new Array<AlertModel>();
    alertService.getAlertObservable().subscribe(this.add.bind(this));
    alertService.getAlertClearingObservable().subscribe(id => this.clear(id))
  }

  close(alert: AlertModel) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = new Array<AlertModel>();
  }

  clear(id: number) {
    console.log(id)
    this.alerts = this.alerts.filter( alert => id !== -1 && alert.id !== id );
  }

  add(item: AlertModel) {
    this.alerts.push(item);
  }
}
