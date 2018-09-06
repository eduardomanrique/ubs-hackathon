import { TestBed, inject } from '@angular/core/testing';

import { FlowListService } from './flow-list.service';

describe('FlowListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlowListService]
    });
  });

  it('should be created', inject([FlowListService], (service: FlowListService) => {
    expect(service).toBeTruthy();
  }));
});
