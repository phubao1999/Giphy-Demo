import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Observable, catchError, throwError } from 'rxjs';
import { RatingEnum } from 'src/app/shared/constants';
import { environment } from 'src/env/environment';

@Injectable()
export class HttpParamsInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.url.includes(environment.giphyApi)) {
      const modifyReq = request.clone({
        params: request.params
          .set('api_key', environment.giphyKey)
          .set('limit', 10)
          .set('rating', RatingEnum.LV1),
      });
      return next.handle(modifyReq);
    }
    if (
      request.url.includes(environment.giphyTags) ||
      request.url.includes(environment.giphyUpload)
    ) {
      const modifyReq = request.clone({
        params: request.params.set('api_key', environment.giphyKey),
      });
      return next.handle(modifyReq);
    }
    return next.handle(request);
  }
}

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private notification: NzNotificationService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        this.notification.create('error', 'Error', err.message);

        return throwError(err);
      })
    );
  }
}
