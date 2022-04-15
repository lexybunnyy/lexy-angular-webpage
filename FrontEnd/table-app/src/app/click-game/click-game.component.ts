import { Component, OnInit } from '@angular/core';
import { AlertService } from '../_services/alert.service';

@Component({
  selector: 'app-click-game',
  templateUrl: './click-game.component.html',
  styleUrls: ['./click-game.component.scss']
})
export class ClickGameComponent implements OnInit {

  alertService: AlertService;

  constructor(alertService: AlertService) { 
    this.alertService = alertService;
  }

  ngOnInit(): void {
  }

}
