import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableMovingGameComponent } from './table-moving-game/table-moving-game.component';
import { ClickGameComponent } from './click-game/click-game.component';

import { TimerComponent } from './timer/timer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialListModule } from './material.module';
import { MyWebCvComponent } from './my-web-cv-old/my-web-cv.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertListComponent } from './alert-list/alert-list.component';


@NgModule({
  exports: [],
  declarations: [
    AppComponent,
    TableMovingGameComponent,
    ClickGameComponent,
    TimerComponent,
    MyWebCvComponent,
    AlertListComponent
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
