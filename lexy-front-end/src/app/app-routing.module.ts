import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableMovingGameComponent } from './table-moving-game/table-moving-game.component'
import { TimerComponent } from './timer/timer.component'
import { MyWebCvComponent } from './my-web-cv/my-web-cv.component';
import { MyWebCvTableComponent } from './my-web-cv-table/my-web-cv-table.component';
import { ClickGameComponent } from './click-game/click-game.component';

const routes: Routes = [
  { path: 'tableGame', component: TableMovingGameComponent },
  { path: 'timer', component: TimerComponent },
  { path: 'cv', component: MyWebCvComponent },
  { path: 'cv2', component: MyWebCvTableComponent },
  { path: 'click-game', component: ClickGameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
