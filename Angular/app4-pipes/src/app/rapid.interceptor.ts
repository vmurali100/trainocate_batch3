import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RapidInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if(request.url.indexOf("get-exchange-rates")>-1){
      const interceptClone = request.clone({
        setHeaders: {
          'X-RapidAPI-Key': 'IXEUAUo6gSmshyDa71pLNljSwKHRp1xt8bqjsn089SWjJ1GyuX',
          'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com',
        },
      });
      return next.handle(interceptClone);
    }else{
      const interceptClone = request.clone({
        setHeaders: {
          'X-RapidAPI-Key': 'IXEUAUo6gSmshyDa71pLNljSwKHRp1xt8bqjsn089SWjJ1GyuX',
          'X-RapidAPI-Host': 'andruxnet-random-famous-quotes.p.rapidapi.com',
        },
      });
      return next.handle(interceptClone);
    }
    
  }
}
