import { Component, inject, OnInit } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { AdoGyaluKftComponent } from './ado-gyalu-kft/ado-gyalu-kft.component';
import { AsztalosReferenciakComponent } from './asztalos-referenciak/asztalos-referenciak.component';
import { KapcsolatSzekesfehervarComponent } from './kapcsolat-szekesfehervar/kapcsolat-szekesfehervar.component';
import { KonyvelesAsztalosRolunkComponent } from './konyveles-asztalos-rolunk/konyveles-asztalos-rolunk.component';
import { KonyvelesDokumentumokComponent } from './konyveles-dokumentumok/konyveles-dokumentumok.component';
import { UniosTamogatasComponent } from './unios-tamogatas/unios-tamogatas.component';
import { CommonModule } from '@angular/common';

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
    ServicesComponent,
    CommonModule
  ],
  animations: [
    /*trigger('fadeAnimation', [
      transition('* => *', [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1 }))
      ])
    ])*/
  ],
  providers: [
    provideAnimations()
  ]
})
export class AppComponent implements OnInit {
  isOtherPageLoaded = false; 
  isPageRedirectedToFacebook = false;
  private route = inject(ActivatedRoute);

  constructor(private router: Router) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
      }
    });
    //this.redirectToFacebook();
  }

  redirectToFacebook(): void {
    this.isPageRedirectedToFacebook = true;
    this.router.navigate(['/facebook-redirect']);
  }
}

