import { TestBed } from '@angular/core/testing';

import { WorksapiService } from './worksapi.service';

describe('WorksapiService', () => {
  let service: WorksapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorksapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
