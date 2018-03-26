import { Injectable, Inject } from '@angular/core';

/* Service */
import { ApiService } from '../../services/api.service';
import { URL_LIST } from '../../shared/data/URL-list';
import { ISuspect } from '../../shared/models/iSuspect';

import { Observable } from "rxjs/Observable";
@Injectable()
export class ResearchService {

  constructor(
    private api: ApiService,
    @Inject('url') public url: URL_LIST
  ) { }

  getAllSuspects(): Observable<ISuspect[]> {
    return this.api.get(this.url.SPRING_URL_GET_SUSPECTS);
  }
}
