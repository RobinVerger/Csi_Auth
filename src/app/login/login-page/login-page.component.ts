import { Component, OnInit, Inject } from '@angular/core';

/* Service */
import { AuthService } from '../../services/auth.service';

/* Router */
import { Router } from '@angular/router';

/* Data */
import { URL_LIST } from '../../shared/data/URL-list';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private auth: AuthService,
      private router: Router,
  ) { }

  ngOnInit() {
     if(this.auth.isLoggedIn)
       this.router.navigate(['main']);
  }

}
