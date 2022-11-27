import { TestBed } from '@angular/core/testing';

import { MbserviceService } from './mbservice.service';

describe('MbserviceService', () => {
  let service: MbserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MbserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
