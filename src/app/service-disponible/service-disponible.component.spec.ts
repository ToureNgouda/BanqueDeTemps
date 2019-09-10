import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDisponibleComponent } from './service-disponible.component';

describe('ServiceDisponibleComponent', () => {
  let component: ServiceDisponibleComponent;
  let fixture: ComponentFixture<ServiceDisponibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceDisponibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDisponibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
