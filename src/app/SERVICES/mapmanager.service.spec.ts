import { TestBed } from '@angular/core/testing';

import { MapmanagerService } from './mapmanager.service';

describe('MapmanagerService', () => {
  let service: MapmanagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapmanagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
