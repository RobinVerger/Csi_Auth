import { TestBed, inject } from '@angular/core/testing';

import { TestBarParamsService } from './test-bar-params.service';

describe('ParamsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestBarParamsService]
    });
  });

  it('should be created', inject([TestBarParamsService], (service: TestBarParamsService) => {
    expect(true).toBeTruthy();
  }));
});
