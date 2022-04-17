import { ListKeyManager } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { AlertService } from '../_services/alert.service';
import { TableIndex, TableIndexArray } from '../_helpers/table-index';
import { Utils } from '../_helpers/utils';

@Component({
  selector: 'app-click-game',
  templateUrl: './click-game.component.html',
  styleUrls: ['./click-game.component.scss']
})
export class ClickGameComponent implements OnInit {

  gameSize = 15;
  actualSteps = 0;
  isOnGoing = false;

  goalList: TableIndexArray = new TableIndexArray();

  ngOnInit(): void { }

  constructor(public alertService: AlertService) {
    this.startGame();
  }

  public getTableClass(x: number, y: number) {
    let result = 'gameButton'
    if (this.goalList.includesI(x, y)) {
      result += " green";
    }
    return result;
  }

  public onTableClick(x: number, y: number) {
    this.actualSteps++;
    if (!this.goalList.includesI(x, y)) {
      this.alertService.alertMessage('You lose!', 'danger');
      this.isOnGoing = false;
    }
    this.generateGoalList();
  }

  public generateGoalList() {
    this.goalList = new TableIndexArray();
    for (let xi = 0; xi < 5; xi++) {
      let x = Utils.getRandom(this.gameSize - 1);
      let y = Utils.getRandom(this.gameSize - 1);
      this.goalList.pushI(x, y);
    }
  }

  public startGame() {
    this.isOnGoing = true;
    this.generateGoalList();
  }

  generateTable(): Array<any> {
    return new Array(this.gameSize);
  }

}
