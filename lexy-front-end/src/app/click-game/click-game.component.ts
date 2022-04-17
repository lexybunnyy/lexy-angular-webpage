import { ListKeyManager } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { AlertService } from '../_services/alert.service';
import { TableIndex } from '../_helpers/table-index';

@Component({
  selector: 'app-click-game',
  templateUrl: './click-game.component.html',
  styleUrls: ['./click-game.component.scss']
})
export class ClickGameComponent implements OnInit {

  gameSize = 15;

  goalList: Array<TableIndex> = new Array();

  ngOnInit(): void { }

  constructor(public alertService: AlertService) {
    this.startGame();
  }

  public getTableClass(x: number, y: number) {
    let result = 'gameButton'
    if (this.goalList.some(goal => goal.equals(x, y))) {
      result += " green";
    }
    return result;
  }

  public onTableClick(x: number, y: number) {
    console.log(x, y);
  }

  public startGame() {
    TableIndex.push(this.goalList, 0, 0);
  }

  generateTable(): Array<any> {
    return new Array(this.gameSize);
  }

}
