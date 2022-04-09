import { Component, OnInit } from '@angular/core';
import { fromEvent, Subject, interval, Observable } from 'rxjs';
import { combineLatestWith, mergeWith } from 'rxjs/operators';
import { distinctUntilChanged, filter, debounceTime, tap, map, concatMap, scan } from 'rxjs/operators';

@Component({
  selector: 'app-table-moving-game',
  templateUrl: './table-moving-game.component.html',
  styleUrls: ['./table-moving-game.component.scss']
})
export class TableMovingGameComponent implements OnInit {

  public keyUp = new Subject<KeyboardEvent>();

  keyActions: Map<String, Observable<string>> = new Map<string, Observable<string>>();
  message = 'table-moving-game works!';
  gameSize = 15;
  current: [number, number] = [0, 0]
  goal: [number, number] = [this.gameSize, this.gameSize]
  basicTime = 10;
  timeLeft = this.basicTime;
  gameTimer:any;
  gameIsOn = false;
  steps = 0;
  
  public getClass(x: number, y: number) {
    const inCurrent = x === this.current[0] && y === this.current[1];
    const inGoal = x === this.goal[0] && y === this.goal[1];
    let result = 'gameButton';
    if (inCurrent)
      return result + ' red';
    
    if (inGoal)
      return result + ' blue';

    return result;
  }


  constructor() { 
    
    this.generateKeyActions();

    this.gameTimer = interval(1000)
    .pipe(
      filter(x => this.gameIsOn),
      map(x => --this.timeLeft),
      tap(console.log))
    .subscribe(() => this.checkGame());
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  generateKeyActions() {
    this.generateKeyAction('ArrowDown', 'X', 1);
    this.generateKeyAction('ArrowRight', 'Y', 1);
    this.generateKeyAction('ArrowLeft', 'Y', -1);
    this.generateKeyAction('ArrowUp', 'X', -1);
  }

  generateKeyAction(codeStr: String, move: String, param: number): void {
    const keyDownEvent = fromEvent<KeyboardEvent>(document, 'keydown').pipe(
      filter(event => event.key === codeStr), //tap(x => console.log('tap1')),
    );
    const keyUpEvent = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
      filter(event => event.key === codeStr), //tap(x => console.log('tap2')),
    );

    const keyAction = keyDownEvent.pipe(
      debounceTime(100),
      combineLatestWith(keyUpEvent),
      debounceTime(100), //tap(x => console.log('tap3', x)),
      map((events) => events[1].code), //tap(x => console.log('tap4')),
    );

    keyAction.subscribe(
      result => {
        this.move(param, move === 'X');
        this.checkGame();
    });


    this.keyActions.set(codeStr, keyAction);
  }

  startGame() {
    this.timeLeft = this.basicTime;
    this.steps = 0;
    this.gameIsOn = true;
    this.current = [ 0 , 0 ];
    this.goal = [this.gameSize - 1, this.gameSize - 1]
  }

  endGame(win: boolean) {
    this.gameIsOn = false;
    if (win) alert("Win")
    else alert("You lose!")
  }

  checkGame() {
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
    return this.current[0] === this.goal[0] && this.current[1] === this.goal[1];
  }

  move(where: number, isX: boolean) {

    let current = isX ? this.current[0] : this.current[1];
    current = current + where;

    if (current > this.gameSize - 1) current = 0;
    if (current == -1) current = this.gameSize -1;

    if (isX) this.current[0] = current;
    else this.current[1] = current;
    ++this.steps;
  }


  generateTable(): Array<any> {
    return new Array(this.gameSize);
  }
}
