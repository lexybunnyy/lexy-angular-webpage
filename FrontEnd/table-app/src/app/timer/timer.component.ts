import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs'; 
import { map, delay,mergeAll, mergeMap, switchMap, concatMap, scan } from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  getData(param: any) {
    return of(` retr${param}`).pipe(
      delay(1000)
    )
  }


  constructor() { 
    /*from([1,2,3,4]).pipe(
      switchMap(param => this.getData(param)),
    ).subscribe(val => 
      console.log(val)
    )*/
    
    from([1,2,3,4]).pipe(
      map(param => this.getData(param)),
      mergeAll(),
      scan((acc, curr) => acc + curr, "")
    ).subscribe(val => 
      console.log(val)
    )
    
    /*from([1,2,3,4,5]).pipe(
      concatMap(param => this.getData(param))
    ).subscribe(val => 
      console.log('concatMap:' + val)
    )*/
    //*/
  }

  ngOnInit(): void {
  }

}
