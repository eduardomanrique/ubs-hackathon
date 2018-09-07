import { TestBed, inject } from '@angular/core/testing';

import { FlowEngineService } from './flow-engine.service';

describe('FlowEngineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlowEngineService]
    });
  });

  it('should be created', inject([FlowEngineService], (service: FlowEngineService) => {
    expect(service).toBeTruthy();
  }));
});
