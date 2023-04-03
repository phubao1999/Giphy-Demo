import { TestBed } from '@angular/core/testing';

import { HttpHandleInterceptor } from './http-handle.interceptor';

describe('HttpHandleInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpHandleInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpHandleInterceptor = TestBed.inject(HttpHandleInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
