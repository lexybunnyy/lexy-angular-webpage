import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertListComponent } from './alert-list.component';
import { AlertService } from '../_services/alert.service';


describe('AlertListComponent', () => {
  let component: AlertListComponent;
  let fixture: ComponentFixture<AlertListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertListComponent ],
      providers: [AlertService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('clear alerts', () => {
    component.add({ type: 'success', message: "Hello", id: 2} );
    component.add({ type: 'success', message: "Hello", id: 2} );
    component.add({ type: 'success', message: "Hello", id: 3} );
    component.clear(2);
    expect(component.alerts.length === 1).toBeTruthy()
  });

  it('clear alerts all', () => {
    component.add({ type: 'success', message: "Hello", id: 2} );
    component.add({ type: 'success', message: "Hello", id: 2} );
    component.add({ type: 'success', message: "Hello", id: 3} );
    component.add({ type: 'success', message: "Hello", id: 0} );
    component.add({ type: 'success', message: "Hello", id: -1} );
    component.clear(-1);
    console.log(component.alerts);
    expect(component.alerts.length === 0).toBeTruthy()
  });
});
