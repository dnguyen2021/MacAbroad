import { TestBed } from '@angular/core/testing';

import { RecommendFunctionService } from './recommend-function.service';

describe('RecommendFunctionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecommendFunctionService = TestBed.get(RecommendFunctionService);
    expect(service).toBeTruthy();
  });
});
