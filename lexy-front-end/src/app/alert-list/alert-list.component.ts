import { Component, OnInit } from '@angular/core';
import { AlertService } from '../_services/alert.service';

interface Alert {
  type: string;
  message: string;
}

@Component({
  selector: 'alert-list',
  templateUrl: './alert-list.component.html',
  styleUrls: ['./alert-list.component.scss']
})
export class AlertListComponent {

  alerts: Array<Alert> = new Array();
  
  constructor(alertService: AlertService) {
    this.alerts = new Array<Alert>();
    alertService.getAlertObservable().subscribe(this.add.bind(this));
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = new Array<Alert>();
  }

  add(item: Alert) {
    this.alerts.push(item);
  }
}
