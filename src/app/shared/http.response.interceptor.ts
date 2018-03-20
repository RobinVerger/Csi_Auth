import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.responseType == 'json') {
      req = req.clone({ responseType: 'text' });
      // console.log('coucou');
      
      return next.handle(req)
      .map(response => {
        if (response instanceof HttpResponse) {
          // console.log(typeof(response.body));
          // console.log(response);
          // console.log('Response 66:' + response.toString());
          // //console.log('Response + parse:' + JSON.parse(response.body));
          // console.log('Response + stringify:' + JSON.stringify(response.body));
          response = response.clone<any>({ body: JSON.stringify(response.body) });
				}
      

				return response;
			});
		}
	
  }
}