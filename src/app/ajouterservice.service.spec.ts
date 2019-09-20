import { TestBed } from '@angular/core/testing';

import { AjouterserviceService } from './ajouterservice.service';

describe('AjouterserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AjouterserviceService = TestBed.get(AjouterserviceService);
    expect(service).toBeTruthy();
  });
});
