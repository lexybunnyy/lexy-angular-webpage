import { Component, OnInit } from '@angular/core';
import { fromEvent, Subject, interval, Observable, Subscription } from 'rxjs';
import { combineLatestWith, mergeWith } from 'rxjs/operators';
import { distinctUntilChanged, filter, debounceTime, tap, map, concatMap, scan } from 'rxjs/operators';
import { AlertService } from '../_services/alert.service';
import { TableIndex, TableIndexArray } from '../_helpers/table-index';
import { Utils } from '../_helpers/utils';

@Component({
  selector: 'app-table-moving-game',
  templateUrl: './table-moving-game.component.html',
  styleUrls: ['./table-moving-game.component.scss']
})
export class TableMovingGameComponent implements OnInit {

  public keyUp = new Subject<KeyboardEvent>();

  subscriptions = new Subscription();
  message = 'table-moving-game works!';
  gameSize = 15;
  current: TableIndex = new TableIndex(0, 0);
  goal: TableIndex = new TableIndex(this.gameSize, this.gameSize)
  basicTime = 10;
  timeLeft = this.basicTime;
  gameTimer:any;
  gameIsOn = false;
  steps = 0;
  alertService: AlertService;
  
  public getClass(x: number, y: number) {
    const inCurrent = this.current.equalsI(x, y);
    const inGoal = this.goal.equalsI(x, y);
    let result = 'gameButton';
    if (inCurrent)
      return result + ' red';
    
    if (inGoal)
      return result + ' blue';

    return result;
  }

  constructor(alertService: AlertService) { 
    this.alertService = alertService;
    this.generateKeyActions();

    this.gameTimer = interval(1000)
      .pipe(
        filter(x => this.gameIsOn),
        map(x => --this.timeLeft), //tap(console.log)
      ).subscribe(() => this.checkGame());
    this.subscriptions.add(this.gameTimer);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  generateKeyActions() {
    this.generateKeyAction('ArrowDown', 'x', 1);
    this.generateKeyAction('ArrowRight', 'y', 1);
    this.generateKeyAction('ArrowLeft', 'y', -1);
    this.generateKeyAction('ArrowUp', 'x', -1);
  }

  generateKeyAction(codeStr: String, xy: String, param: number): void {

    const keyDownEvent = fromEvent<KeyboardEvent>(document, 'keydown').pipe(
      tap(e => Utils.blockScrolling(e)),
      filter(event => event.key === codeStr), //tap(x => console.log('tap1')),
    );
    const keyUpEvent = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
      filter(event => event.key === codeStr), 
      //tap(x => console.log('tap2')),
    );

    const keyAction = keyDownEvent.pipe(
      debounceTime(100),
      combineLatestWith(keyUpEvent),
      debounceTime(100), //tap(x => console.log('tap3', x)),
      map((events) => events[1].code), //tap(x => console.log('tap4')),
    );

    let subscription = keyAction.subscribe(
      result => {
        this.move(param, xy);
        this.checkGame();
    });

    this.subscriptions.add(subscription);
  }

  randomIndex() {
    return Utils.getRandom(this.gameSize - 1);
  }

  startGame() {
    this.alertService.clearAlerts();
    this.timeLeft = this.basicTime;
    this.steps = 0;
    this.gameIsOn = true;
    this.current.set(0, 0);
    this.goal.set(this.randomIndex(), this.randomIndex());
  }

  endGame(win: boolean) {
    this.gameIsOn = false;
    if (win) this.alertService.alertMessage('Congratulations! You win with ' + this.steps + " steps")
    else this.alertService.alertMessage('Sorry, you lose!', 'danger')
  }

  checkGame() {
    if(!this.gameIsOn) {
      return;
    }

    if(this.isWin()) {
      this.endGame(true);
      return; 
    }

    if(this.timeLeft <= 0){
      this.endGame(false);
      return; 
    }
  }

  isWin() {
    return this.current.equalsO(this.goal);
  }

  move(where: number, xy: String) {
    let current = this.current.getXorY(xy);
    current = current + where;

    if (current > this.gameSize - 1) 
      current = 0;

    if (current == -1) 
      current = this.gameSize -1;

    this.current.setXorY(xy, current)
    ++this.steps;
  }


  generateTable(): Array<any> {
    return new Array(this.gameSize);
  }
}
