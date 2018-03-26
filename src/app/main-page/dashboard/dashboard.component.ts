import { Component, OnInit, Inject } from '@angular/core';

/* Services */
import { ApiService } from '../../services/api.service';

/* Rxjs */
import { Observable } from "rxjs/Observable";

/* Data */
import { URL_LIST } from '../../shared/data/URL-list';
import { ICase } from '../../shared/models/ICase';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  favCases$ : Observable<ICase[]>;

  constructor(
      private api: ApiService,
      @Inject('url') public url: URL_LIST
      ) { }

  ngOnInit() {
    this.getUserPrefs(this.url.FAKE_USER_PREF);
  }

  getUserPrefs(url){
    this.api.get(url)
      .map(data => this.favCases$ = data['fav_case']['data'])
      //.do(x => console.log(x))
      .subscribe( data => this.favCases$)
                            
  }
}
