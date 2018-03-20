import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { LoginUserComponent } from "./login-user/login-user.component";
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
      children: [
        { path: '', component: LoginUserComponent },
        { path: 'login', component: LoginUserComponent },
        { path: 'pass', component: ForgotPasswordComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
