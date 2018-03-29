import { Injectable, Inject } from '@angular/core';

/* Service */
import { ApiService } from '../../services/api.service';
import { URL_LIST } from '../../shared/data/URL-list';
import { ISuspect } from '../../shared/models/iSuspect';

import { Observable } from "rxjs/Observable";
@Injectable()
export class ResearchService {

  /* Tab index */
  currentIndex: number = 0;

  /* Table Config param */
  displayedColumns: string[] = [];

  /* Research Tab Path */
  result$: Observable<any>;
  resultType: string = "";
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

  /* Table management */
  defineTypeTable(typeData) {
    /* Set the type of Table */
    switch(typeData) {
      case 'suspect':
        this.displayedColumns = ['id', 'nom', 'prenom', 'genre', 'nationalite', 'suspectSpecific'];
        break;
      case 'case':
        this.displayedColumns = ['numeroDossier', 'nom', 'categorie', 'dateCreation', 'statut', 'caseSpecific'];
    }
  }

}
