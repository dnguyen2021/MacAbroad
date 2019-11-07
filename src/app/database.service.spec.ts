import { TestBed } from '@angular/core/testing';

import { FirebaseService } from './database.service';

describe('DatabaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseService = TestBed.get(FirebaseService);
    expect(service).toBeTruthy();
  });
});