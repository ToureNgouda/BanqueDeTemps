import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemanderServiceComponent } from './demander-service.component';

describe('DemanderServiceComponent', () => {
  let component: DemanderServiceComponent;
  let fixture: ComponentFixture<DemanderServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemanderServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemanderServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
