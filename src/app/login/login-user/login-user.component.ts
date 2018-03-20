import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { MainPageModule } from "../../main-page/main-page.module";
import { AuthService } from '../../services/auth.service';
import { LoginService } from '../services/login.service';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService, private api: ApiService) { }

  ngOnInit() {
  }

  /* Testing purpose */
  
  // logIn() {
  //   this.auth.setToken('authenToken');
  //   this.router.navigate(['main'], { replaceUrl : true });
  // }

  onSubmit(payload) {

    console.log(JSON.stringify(payload));

    this.api.post('http://localhost:4242/api/auth', payload)
      .subscribe(data => {
        console.log('token set to:' + data);
        this.auth.setToken(data);
        this.router.navigate(['main'], { replaceUrl : true });
      });
  }
}
