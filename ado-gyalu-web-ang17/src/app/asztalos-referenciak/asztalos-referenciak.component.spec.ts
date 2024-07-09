import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsztalosReferenciakComponent } from './asztalos-referenciak.component';

describe('AsztalosReferenciakComponent', () => {
  let component: AsztalosReferenciakComponent;
  let fixture: ComponentFixture<AsztalosReferenciakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsztalosReferenciakComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsztalosReferenciakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
