import { Injectable, Inject } from '@angular/core';

/* Service */
import { ApiService } from '../../services/api.service';
import { URL_LIST } from '../../shared/data/URL-list';
import { ISuspect } from '../../shared/models/iSuspect';

import { Observable } from "rxjs/Observable";
import { FormGroup, FormControl } from '@angular/forms';
@Injectable()
export class ResearchService {

  /* Tab index */
  currentIndex: number = 0;

  /* Table Config param */
  displayedColumns: string[] = [];

  /* Research Tab Path */
  result$: Object[] = []; //if not initialized, forms and card creations will throw error because result$ will be 'undefined'
  resultType: string = "suspect"; //activate card and form
  detailTabIsDisabled = true;


  constructor(
    private api: ApiService,
  ) { }

  /* Http Calls */
  getList(path): Observable<any> {
    return this.api.get(path);
  }
  getSpecific(path): Observable<any> {
    return this.api.get(path);
  }
  createEntry(path, body): Observable<any> {
  return this.api.post(path, body);
  }
  updateEntry(path, body, id): Observable<any> {
  path = `${path}/${id}` //set the path based on id
  return this.api.put(path, body);
}
deleteEntry(path, id): Observable<any> {
  path = `${path}/${id}` //set the path based on id
  return this.api.delete(path, id);
  }

  /* Table management */
  defineTypeTable(typeData) {
    /* Set the type of Table */
    switch(typeData) {
      case 'suspect':
        this.displayedColumns = ['id', 'nom', 'prenom', 'genre', 'nationalite', 'suspectSpecific'];
        break;
        case 'enquete':
        this.displayedColumns = ['numeroDossier', 'nom', 'categorie', 'dateCreation', 'statut', 'caseSpecific'];
        break;
        case 'agent':
        this.displayedColumns =['id', 'nom', 'prenom', 'genre', 'nationalite', 'userSpecific'];
        break;
    }
  }

}
