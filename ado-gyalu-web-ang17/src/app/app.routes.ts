import { Routes } from '@angular/router';
import { AdoGyaluKftComponent } from './ado-gyalu-kft/ado-gyalu-kft.component';
import { AsztalosReferenciakComponent } from './asztalos-referenciak/asztalos-referenciak.component';
import { KonyvelesAsztalosRolunkComponent } from './konyveles-asztalos-rolunk/konyveles-asztalos-rolunk.component';
import { KonyvelesDokumentumokComponent } from './konyveles-dokumentumok/konyveles-dokumentumok.component';
import { FacebookRedirectComponent } from './facebook-redirect/facebook-redirect.component';
import { WelcomeSlideshowComponent } from './welcome-slideshow/welcome-slideshow.component';

export const routes: Routes = [
    { path: 'welcome-slideshow', component: WelcomeSlideshowComponent },
    { path: 'ado-gyalu-kft', component: AdoGyaluKftComponent },
    { path: 'asztalos-referenciak', component: AsztalosReferenciakComponent },
    { path: 'konyveles-asztalos-rolunk', component: KonyvelesAsztalosRolunkComponent },
    { path: 'konyveles-dokumentumok', component: KonyvelesDokumentumokComponent },
    { path: 'facebook-redirect', component: FacebookRedirectComponent },

    { path: '**', redirectTo: '', pathMatch: 'full' },
  ];
  