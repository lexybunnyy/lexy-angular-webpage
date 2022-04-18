import { ListKeyManager } from '@angular/cdk/a11y';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertService } from '../_services/alert.service';
import { TableIndex, TableIndexArray } from '../_helpers/table-index';
import { Utils } from '../_helpers/utils';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-click-game',
  templateUrl: './click-game.component.html',
  styleUrls: ['./click-game.component.scss']
})
export class ClickGameComponent implements OnInit {

  gameSize = 15;
  actualSteps = 0;
  isOnGoing = false;
  timeLeft = 0;

  gameTimer: Observable<number>;
  gameTimerSubscribction: any;
  goalList: TableIndexArray = new TableIndexArray();

  ngOnInit(): void {
    
  }

  ngOnDestroy():void {
    this.gameTimerSubscribction?.unsubscribe();
  }
  
  constructor(public alertService: AlertService) {
    this.gameTimer = interval(1000);
  }

  public getTableClass(x: number, y: number) {
    let result = 'gameButton'
    if (this.goalList.includesI(x, y)) {
      result += " green";
    }
    return result;
  }

  public onTableClick(x: number, y: number) {
    if (!this.isOnGoing) {
      return;
    };

    this.actualSteps++;
    if (!this.goalList.includesI(x, y)) {
      this.alertService.alertMessage('You lose!', 'danger');
      this.endGame();
    }
    
    this.generateGoalList();
  }

  public generateGoalList() {
    this.goalList.clear();
    for (let xi = 0; xi < 5; xi++) {
      let x = Utils.getRandom(this.gameSize - 1);
      let y = Utils.getRandom(this.gameSize - 1);
      this.goalList.pushI(x, y);
    }
  }

  public startGame() {
    this.alertService.clearAlerts();
    this.actualSteps = 0;
    this.timeLeft = 10;
    this.isOnGoing = true;
    this.generateGoalList();

    this.gameTimerSubscribction =  this.gameTimer.subscribe(() => 
    {
      --this.timeLeft;
      if (this.timeLeft <= 0) {
        this.alertService.alertMessage('The game has ended. Your points:' + this.actualSteps, 'info')
        this.endGame();
      }
    })
  }

  public endGame() {
    this.gameTimerSubscribction?.unsubscribe()
    this.goalList.clear();
    this.isOnGoing = false;
  }

  generateTable(): Array<any> {
    return new Array(this.gameSize);
  }

}
