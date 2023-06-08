import { TestBed } from '@angular/core/testing';

import { RapidInterceptor } from './rapid.interceptor';

describe('RapidInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      RapidInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: RapidInterceptor = TestBed.inject(RapidInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
