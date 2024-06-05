import { TestBed } from '@angular/core/testing';

import { HeroesApiService } from './heroes-api.service';

describe('HeroesApiService', () => {
  let service: HeroesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
