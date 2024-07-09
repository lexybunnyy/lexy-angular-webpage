import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoGyaluKftComponent } from './ado-gyalu-kft.component';

describe('AdoGyaluKftComponent', () => {
  let component: AdoGyaluKftComponent;
  let fixture: ComponentFixture<AdoGyaluKftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdoGyaluKftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdoGyaluKftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
