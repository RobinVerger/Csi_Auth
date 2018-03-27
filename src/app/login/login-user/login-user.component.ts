import { Component, OnInit } from '@angular/core';

/* Router */
import { Router, Route, ActivatedRoute } from '@angular/router';

/* Services */
import { AuthService } from '../../services/auth.service';
import { LoginService } from '../services/login.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {

  constructor(
      private router: Router, 
      private auth: AuthService, 
      private api: ApiService
    ) { }

  ngOnInit() {
  }

  /* Authentication call */
  onSubmit(payload) {

   // console.log(JSON.stringify(payload));
    this.api.post('http://localhost:4242/api/auth', payload)
     .subscribe(resp => {
       this.auth.setToken(resp);
        this.router.navigate(['main'], { replaceUrl : true });
      });
  }
}
