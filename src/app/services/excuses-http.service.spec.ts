import { TestBed } from '@angular/core/testing';

import { ExcusesHttpService } from './excuses-http.service';

describe('ExcusesHttpService', () => {
  let service: ExcusesHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExcusesHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
