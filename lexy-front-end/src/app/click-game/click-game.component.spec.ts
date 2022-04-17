import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClickGameComponent } from './click-game.component';
import { AlertService } from '../_services/alert.service';
import { ignoreElements } from 'rxjs';
import { getMatTooltipInvalidPositionError } from '@angular/material/tooltip';
import { TableIndex, TableIndexArray } from '../_helpers/table-index';

describe('ClickGameComponent', () => {
  let component: ClickGameComponent;
  let fixture: ComponentFixture<ClickGameComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClickGameComponent ],
      providers: [AlertService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('getTableClass basic', () => {
    component
    expect(component.getTableClass(0, 0)).toBe('gameButton')
  })

  it('getTableClass green', () => {
    component.goalList = new TableIndexArray();
    component.goalList.pushI(0, 0)
    expect(component.getTableClass(0, 0)).toBe('gameButton green')
  })
  it('getTableClass normal', () => {
    component.goalList = new TableIndexArray();
    component.goalList.pushI(0, 0)
    expect(component.getTableClass(0, 1)).toBe('gameButton')
  })
});
