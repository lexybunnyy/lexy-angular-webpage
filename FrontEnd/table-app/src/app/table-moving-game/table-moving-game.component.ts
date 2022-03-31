import { Component, OnInit } from '@angular/core';
import { fromEvent, Subject, interval, Observable } from 'rxjs';
import { combineLatestWith, mergeWith } from 'rxjs/operators';
import { distinctUntilChanged, filter, debounceTime, tap, map, concatMap } from 'rxjs/operators';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-table-moving-game',
  templateUrl: './table-moving-game.component.html',
  styleUrls: ['./table-moving-game.component.scss']
})
export class TableMovingGameComponent implements OnInit {

  public keyUp = new Subject<KeyboardEvent>();

  keyActions: Map<String, Observable<string>> = new Map<string, Observable<string>>();
  message = 'table-moving-game works!';
  currentX : number = 0;
  currentY : number = 0;
  gameSize = 15;
  secondsCounter: any;
  currentGoalX : number = 2;
  currentGoalY : number = 2;


  public getClass(x: number, y: number) {
    const inCurrent = x === this.currentX && y === this.currentY;
    const inGoal = x === this.  currentGoalX && y === this.currentGoalY;
    if (inCurrent)
      return 'red';
    
    if (inGoal)
      return 'blue';

    return '';
  }


  constructor() { 
    
    this.generateKeyActions();

    this.secondsCounter = interval(1000).subscribe(n => {
        this.message = `It's been ${n + 1} seconds since subscribing!`;
    })

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.secondsCounter.unsubscribe();
  }


  generateKeyActions() {
    this.generateKeyAction('ArrowDown', 'X', 1);
    this.generateKeyAction('ArrowRight', 'Y', 1);
    this.generateKeyAction('ArrowLeft', 'Y', -1);
    this.generateKeyAction('ArrowUp', 'X', -1);
  }

  generateKeyAction(codeStr: String, move: String, param: number): void {
    const keyDowns = fromEvent<KeyboardEvent>(document, 'keydown');
    let keyDownFilter = keyDowns.pipe(
      filter(event => event.key === codeStr),
      //tap(x => console.log('tap1')),
    );

    const keyUps = fromEvent<KeyboardEvent>(document, 'keyup');
    let keyUpFilter = keyUps.pipe(
      filter(event => event.key === codeStr),
      //tap(x => console.log('tap2')),
    );

    this.keyActions.set(codeStr, keyDownFilter.pipe(
      debounceTime(100),
      combineLatestWith(keyUpFilter),
      debounceTime(100),
      //tap(x => console.log('tap3', x)),
      map((events) => events[1].code),
      //tap(x => console.log('tap4')),
    ));

    this.keyActions.get(codeStr)?.subscribe(
      result => {
        this.move(param, move === 'X');
    });
  }

  move(where: number, isX: boolean) {
    let current = isX ? this.currentX : this.currentY;
    current = current + where;

    if (current > this.gameSize - 1) current = 0;
    if (current == -1) current = this.gameSize -1;

    if (isX) this.currentX = current;
    else this.currentY = current;
  }


  generateTable(): Array<any> {
    return new Array(this.gameSize);
  }
}
