import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KonyvelesDokumentumokComponent } from './konyveles-dokumentumok.component';

describe('KonyvelesDokumentumokComponent', () => {
  let component: KonyvelesDokumentumokComponent;
  let fixture: ComponentFixture<KonyvelesDokumentumokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KonyvelesDokumentumokComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KonyvelesDokumentumokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
