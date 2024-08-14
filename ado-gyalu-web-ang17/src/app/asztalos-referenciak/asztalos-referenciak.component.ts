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
    '11110015.jpg',
    '1140237788.jpeg',  
    '1140238763.jpg',  
    '1144468020.jpg',           
    'robi dávid konyha2 009.jpg',
    '11110017.jpg',
    '1140238046.jpeg',  
    '1140239132.jpg',   
    '2003_0127_162518AA.jpeg',
    'robi dávid konyha2 022.jpg',
    '1140237678.jpg',
    '1140238271.jpeg',
    '1140239385.jpg',
    'harmonika_ajto_1.jpg',
    '1140237703.jpg',
    '1140238324.jpg',
    '1140239465.jpeg',
    'harmonika_ajto_2.jpg',
    '1140237761.jpg',
    '1140238732.jpeg',
    '1140239535.jpg',
    'harmonika_ajto_3.jpg'
  ];

  imagesObject: Object[] = [];

  onGaleryChange(event: any) {
    console.log('galery', event);
  }

  ngOnInit(): void {
    this.imagesObject = this.images.map(imageString => {
      return {
        image: 'assets/referenciak/ajto/' + imageString,
        thumbImage: 'assets/referenciak_mini_fooldal/ajto/' + imageString
      }
    })
  }
}


