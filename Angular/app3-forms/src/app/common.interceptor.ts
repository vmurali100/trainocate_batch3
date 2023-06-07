import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CommonInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log(request)
    if(request.url.indexOf('jsonplaceholder') > -1){
      return next.handle(request);
    }
    
    const reqCopy = request.clone({
      setHeaders:{
        'X-RapidAPI-Key': 'IXEUAUo6gSmshyDa71pLNljSwKHRp1xt8bqjsn089SWjJ1GyuX',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    });
    // reqCopy.headers.set({
      // 'X-RapidAPI-Key': 'IXEUAUo6gSmshyDa71pLNljSwKHRp1xt8bqjsn089SWjJ1GyuX',
      // 'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    // });
    // reqCopy.headers.set(
    //   'X-RapidAPI-Key',
    //   'IXEUAUo6gSmshyDa71pLNljSwKHRp1xt8bqjsn089SWjJ1GyuX'
    // );
    // reqCopy.headers.set('X-RapidAPI-Host', 'weatherapi-com.p.rapidapi.com');

    return next.handle(reqCopy);
  }
}
