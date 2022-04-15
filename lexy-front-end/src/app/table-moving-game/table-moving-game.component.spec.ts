import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMovingGameComponent } from './table-moving-game.component';

describe('TableMovingGameComponent', () => {
  let component: TableMovingGameComponent;
  let fixture: ComponentFixture<TableMovingGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableMovingGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableMovingGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
