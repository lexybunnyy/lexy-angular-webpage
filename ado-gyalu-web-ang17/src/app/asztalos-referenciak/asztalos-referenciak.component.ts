import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { NgImageSliderModule } from 'ng-image-slider';
import { AsztalosReferenciakService } from './asztalos-referenciak.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-asztalos-referenciak',
  standalone: true,
  imports: [
    CommonModule,
    NgImageSliderModule,
  ],
  providers: [
    AsztalosReferenciakService,
  ],
  templateUrl: './asztalos-referenciak.component.html',
  styleUrl: './asztalos-referenciak.component.less'
})
export class AsztalosReferenciakComponent implements OnInit {

  service = inject(AsztalosReferenciakService);


  imagesObject: Object[] = [];

  onGaleryChange(event: any) {
    console.log('galery', event);
  }

  async ngOnInit(): Promise<void> {
    this.imagesObject = await this.service.getAjto();
  }
}


function boostrapApplication(App: any, arg1: { providers: any[]; }): import("@angular/core").Provider {
  throw new Error('Function not implemented.');
}

