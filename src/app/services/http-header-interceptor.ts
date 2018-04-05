import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponseBase, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { AuthService } from "./auth.service";
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = req.headers
      .set('Content-Type', 'application/json')
      .append('Authorization', `Bearer ${this.auth.getToken()}`);
    const authReq = req.clone({ headers });

    return next.handle(authReq)
                .do((ev: HttpEvent<any>) => {
                  if(ev instanceof HttpResponse) {
                    console.log('processing response');
                  }
                  return ev;
                }).catch( response => {
                  if(response instanceof HttpErrorResponse) {
                    console.log(('processing error response'));
                  }
                  return Observable.throw(response);
                })
  }
}