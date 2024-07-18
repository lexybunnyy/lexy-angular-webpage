import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgImageSliderModule } from 'ng-image-slider';
@Component({
  selector: 'app-asztalos-referenciak',
  standalone: true, 
  imports: [
    CommonModule,
    NgImageSliderModule,
  ],
  templateUrl: './asztalos-referenciak.component.html',
  styleUrl: './asztalos-referenciak.component.less'
})
export class AsztalosReferenciakComponent implements OnInit {
  images: string[] = [
    'assets/referenciak/konyhabutor/konyhabutor_1.jpg',
    'assets/referenciak/konyhabutor/konyhabutor_2.jpg',
    'assets/referenciak/konyhabutor/konyhabutor_3.jpg',
    'assets/referenciak/konyhabutor/konyhabutor_1.jpg',
    'assets/referenciak/konyhabutor/konyhabutor_2.jpg',
    'assets/referenciak/konyhabutor/konyhabutor_3.jpg',
    'assets/referenciak/konyhabutor/konyhabutor_1.jpg',
    'assets/referenciak/konyhabutor/konyhabutor_2.jpg',
    'assets/referenciak/konyhabutor/konyhabutor_3.jpg',
  ];

  imagesObject: Object[] = [];

  onGaleryChange(event: any) {
    console.log('galery', event);
  }

  ngOnInit(): void {
    this.imagesObject = this.images.map(imageString => {
      return {
        image: imageString,
        thumbImage: imageString
      }
    })
  }
}


