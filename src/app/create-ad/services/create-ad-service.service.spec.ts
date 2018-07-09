import { TestBed, inject } from '@angular/core/testing';

import { CreateAdServiceService } from './create-ad-service.service';

describe('CreateAdServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateAdServiceService]
    });
  });

  it('should be created', inject([CreateAdServiceService], (service: CreateAdServiceService) => {
    expect(service).toBeTruthy();
  }));
});
