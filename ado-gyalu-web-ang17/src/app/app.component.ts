/*
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:[
    importProvidersFrom(BrowserModule),
    importProvidersFrom(BrowserAnimationsModule),
  ],
  standalone: true,
  styleUrls: ['./app.component.less'],
  animations: [
    trigger('fadeAnimation', [
      transition('* => *', [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class AppComponent { 
}*/


import { Component, inject, OnInit } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { AdoGyaluKftComponent } from './ado-gyalu-kft/ado-gyalu-kft.component';
import { AsztalosReferenciakComponent } from './asztalos-referenciak/asztalos-referenciak.component';
import { KapcsolatSzekesfehervarComponent } from './kapcsolat-szekesfehervar/kapcsolat-szekesfehervar.component';
import { KonyvelesAsztalosRolunkComponent } from './konyveles-asztalos-rolunk/konyveles-asztalos-rolunk.component';
import { KonyvelesDokumentumokComponent } from './konyveles-dokumentumok/konyveles-dokumentumok.component';
import { UniosTamogatasComponent } from './unios-tamogatas/unios-tamogatas.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    AdoGyaluKftComponent,
    AsztalosReferenciakComponent,
    KapcsolatSzekesfehervarComponent,
    KonyvelesAsztalosRolunkComponent,
    KonyvelesDokumentumokComponent,
    UniosTamogatasComponent,
    ServicesComponent
  ],
  animations: [
    trigger('fadeAnimation', [
      transition('* => *', [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1 }))
      ])
    ])
  ],
  providers: [
    provideAnimations()
  ]
})
export class AppComponent implements OnInit{ 
  private route = inject(ActivatedRoute);

  title = 'ado-gyalu-web-ang17';

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}

