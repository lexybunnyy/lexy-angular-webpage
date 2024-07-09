import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KonyvelesAsztalosRolunkComponent } from './konyveles-asztalos-rolunk.component';

describe('KonyvelesAsztalosRolunkComponent', () => {
  let component: KonyvelesAsztalosRolunkComponent;
  let fixture: ComponentFixture<KonyvelesAsztalosRolunkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KonyvelesAsztalosRolunkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KonyvelesAsztalosRolunkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
