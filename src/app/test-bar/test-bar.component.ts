import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { TestBarParamsService } from './services/test-bar-params.service';
import { URL_LIST } from '../shared/data/URL-list';

@Component({
  selector: 'test-bar',
  templateUrl: './test-bar.component.html',
  styleUrls: ['./test-bar.component.scss']
})
export class TestBarComponent implements OnInit {

  /* JWT fake token */
  token: string = 'random token';
  test_response;

  constructor(
      private api: ApiService, 
      private auth: AuthService,
      private params: TestBarParamsService,
      @Inject('url') public url: URL_LIST,
      private router: Router
      ) { }

  ngOnInit() {
  }

  /* Custom http call, urls comes from the buttons in template */
  httpCall(url) {
    this.api.get(url)
    .do(res => console.log(res))
    .subscribe(res => this.test_response = res);
  }

  /* Generate and destroy quick token stored in LocalStorage for tests */
  generateToken() {
    localStorage.setItem(this.auth.storageKey, this.token);
    console.log('Setting localStorage Item to: ' + this.auth.getToken());
  }
  deleteToken() {
    localStorage.removeItem(this.auth.storageKey);
  }

  /* Generic navigation for the buttons. "path" is defined within the button */
  navigate(path){
    this.router.navigate([`${path}`], { replaceUrl : true });
  }
}