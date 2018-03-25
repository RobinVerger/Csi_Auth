import { Component, OnInit, Inject } from '@angular/core';

/* Services */
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { TestBarParamsService } from './services/test-bar-params.service';
/* Router */
import { Router } from '@angular/router';

/* Data */
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
      public barConfig: TestBarParamsService,
      @Inject('url') public url: URL_LIST,
      
      private api: ApiService, 
      public auth: AuthService,
      private params: TestBarParamsService,
      private router: Router
      ) { }

  ngOnInit() {
    console.log(this.auth.isLoggedIn());
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

  toggleVisibility(){
    this.barConfig.toggleVisibility();
    console.log('toggleDone');
    console.log(this.barConfig.isVisible);
  }
  toggleAuthentication() {
    const logged = this.auth.isLoggedIn();
    if(logged)
      this.deleteToken();
    else
      this.generateToken();
    
  }
}