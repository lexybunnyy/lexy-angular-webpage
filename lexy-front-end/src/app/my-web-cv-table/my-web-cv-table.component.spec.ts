import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWebCvTableComponent } from './my-web-cv-table.component';

describe('MyWebCvTableComponent', () => {
  let component: MyWebCvTableComponent;
  let fixture: ComponentFixture<MyWebCvTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyWebCvTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWebCvTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
