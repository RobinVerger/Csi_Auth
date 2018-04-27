import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { AuthService } from "./auth.service"

import { HttpClient, HttpHeaders, HttpRequest, HttpResponse, HttpParams, HttpErrorResponse } from "@angular/common/http";

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import { ISuspect } from '../shared/models/iSuspect';
import { MatSnackBar } from '@angular/material';


@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient, private auth: AuthService,
    public snackBar: MatSnackBar
  ) { }

  get(url: string) {
    
    return this.http.get(url).catch((res: HttpErrorResponse) => this.onRequestError(res));
  }

  post(url: string, body: Object) {

    return this.http.post(url, body )
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
    switch (error.statusCode){
      case 0:
        this.snackBar.open('Erreur: Pas de connexion', 'OK')
         break;
      case 400: 
        this.snackBar.open('Erreur: Mauvaise requete', 'OK')
        break;
      case 401: 
        this.snackBar.open('Erreur: Vous n\'etes pas autorisé', 'OK')
        break;
      case 403:
        this.snackBar.open('Erreur: Erreur interne', 'OK')
        break;
      case 404: 
        this.snackBar.open('Erreur: Page non trouvée', 'OK')
        break;
      case 500: 
        this.snackBar.open('Erreur: Existe déja', 'OK')
        break;

    }
    console.log(error);
    return Observable.throw(error);
  }

}
