import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KapcsolatSzekesfehervarComponent } from './kapcsolat-szekesfehervar.component';

describe('KapcsolatSzekesfehervarComponent', () => {
  let component: KapcsolatSzekesfehervarComponent;
  let fixture: ComponentFixture<KapcsolatSzekesfehervarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KapcsolatSzekesfehervarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KapcsolatSzekesfehervarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
