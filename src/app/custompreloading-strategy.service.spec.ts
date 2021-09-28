import { TestBed } from '@angular/core/testing';

import { CustompreloadingStrategyService } from './custompreloading-strategy.service';

describe('CustompreloadingStrategyService', () => {
  let service: CustompreloadingStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustompreloadingStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
