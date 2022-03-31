import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableMovingGameComponent } from './table-moving-game/table-moving-game.component'
import { TimerComponent } from './timer/timer.component'

const routes: Routes = [
  { path: 'tableGame', component: TableMovingGameComponent },
  { path: 'timer', component: TimerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
