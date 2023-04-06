import { TestBed } from '@angular/core/testing';

import { HttpParamsInterceptor } from './http-handle.interceptor';

describe('HttpHandleInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [HttpParamsInterceptor],
    })
  );

  it('should be created', () => {
    const interceptor: HttpParamsInterceptor = TestBed.inject(
      HttpParamsInterceptor
    );
    expect(interceptor).toBeTruthy();
  });
});
