import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWebCvComponent } from './my-web-cv.component';

describe('MyWebCvComponent', () => {
  let component: MyWebCvComponent;
  let fixture: ComponentFixture<MyWebCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyWebCvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWebCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
