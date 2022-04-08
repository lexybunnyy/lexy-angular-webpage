import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs'; 
import { map, delay,mergeAll, mergeMap, switchMap, concatMap, scan, tap } from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  getData(param: number) {
    return of(` retr${param}`).pipe(
      delay(param*1000)
    )
  }


  constructor() { 
    from([1,2,3,4]).pipe(
      map(param => this.getData(param)),
      mergeAll(),
      scan((acc, curr) => acc + curr, "")
    ).subscribe(val => {
      console.log(val)
    })
  
  }

  ngOnInit(): void {
  }

}
