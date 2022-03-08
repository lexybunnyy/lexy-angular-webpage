import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableMovingGameComponent } from './table-moving-game/table-moving-game.component'
const routes: Routes = [{ path: '**', component: TableMovingGameComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
