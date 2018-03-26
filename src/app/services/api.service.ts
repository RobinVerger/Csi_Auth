import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { AuthService } from "./auth.service"

import { HttpClient, HttpHeaders, HttpRequest, HttpResponse, HttpParams, HttpErrorResponse } from "@angular/common/http";

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import { ISuspect } from '../shared/models/iSuspect';


@Injectable()
export class ApiService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  get(url: string) {
    
    return this.http.get(url).catch((res: HttpErrorResponse) => this.onRequestError(res));
  }

  post(url: string, body: Object) {

    return this.http.post(url, body )
    .do(res => console.log(res))
    .catch((res: HttpErrorResponse) => this.onRequestError(res));
  }

  put(url: string, body: Object) {

    return this.http.put(url, body).catch((res: HttpErrorResponse) => this.onRequestError(res));
  }

  delete(url: string, params?: string, paramsValue?: string) {

    return this.http.delete(url).catch((res: HttpErrorResponse) => this.onRequestError(res));
  }

  onRequestError(res: HttpErrorResponse) {

    const error = {
      statusCode: res.status,
      error: res.message
    };

    console.log(error);
    return Observable.throw(error);
  }

}
