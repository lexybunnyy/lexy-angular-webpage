import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniosTamogatasComponent } from './unios-tamogatas.component';

describe('UniosTamogatasComponent', () => {
  let component: UniosTamogatasComponent;
  let fixture: ComponentFixture<UniosTamogatasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniosTamogatasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UniosTamogatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
