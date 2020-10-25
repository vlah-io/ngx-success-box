import { TestBed } from '@angular/core/testing';

import { NgxSuccessBoxService } from './ngx-success-box.service';

describe('NgxSuccessBoxService', () => {
  let service: NgxSuccessBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSuccessBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
