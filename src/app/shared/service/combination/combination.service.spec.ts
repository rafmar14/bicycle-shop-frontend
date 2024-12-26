import { TestBed } from '@angular/core/testing';

import { CombinationService } from '../combination.service';

describe('ProductService', () => {
  let service: CombinationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CombinationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
