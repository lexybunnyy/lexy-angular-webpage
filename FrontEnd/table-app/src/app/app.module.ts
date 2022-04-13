import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableMovingGameComponent } from './table-moving-game/table-moving-game.component';

import { TimerComponent } from './timer/timer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialListModule} from './material.module';
import { MyWebCvComponent } from './my-web-cv/my-web-cv.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  exports: [],
  declarations: [
    AppComponent,
    TableMovingGameComponent,
    TimerComponent,
    MyWebCvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialListModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
