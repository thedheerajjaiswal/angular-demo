import { TestBed } from '@angular/core/testing';

import { BookwebService } from './bookweb.service';

describe('BookwebService', () => {
  let service: BookwebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookwebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
