import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDemanderComponent } from './service-demander.component';

describe('ServiceDemanderComponent', () => {
  let component: ServiceDemanderComponent;
  let fixture: ComponentFixture<ServiceDemanderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceDemanderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDemanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
