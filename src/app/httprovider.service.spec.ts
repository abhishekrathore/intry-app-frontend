import { TestBed, inject } from '@angular/core/testing';

import { HttproviderService } from './httprovider.service';

describe('HttproviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttproviderService]
    });
  });

  it('should be created', inject([HttproviderService], (service: HttproviderService) => {
    expect(service).toBeTruthy();
  }));
});
