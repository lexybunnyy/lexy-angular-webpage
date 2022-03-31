import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableMovingGameComponent } from './table-moving-game/table-moving-game.component';

import { TimerComponent } from './timer/timer.component';


@NgModule({
  exports: [],
  declarations: [
    AppComponent,
    TableMovingGameComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
