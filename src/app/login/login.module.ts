import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Utilities */
import { FormsModule } from '@angular/forms';

/* Material */
import { MaterialImportsModule } from "../material-imports.module";

/* Routes */
import { LoginRoutingModule } from './login-routing.module';

/* Child Components */
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

/* Http */
import { HeaderInterceptor } from '../services/http-header-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginService } from './services/login.service';

/* Test purpose */
import { TestBarModule } from '../test-bar/test-bar.module';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialImportsModule,
    FormsModule,
    TestBarModule    
  ],
  declarations: [
    LoginPageComponent,
    LoginUserComponent,
    ForgotPasswordComponent
  ],
  providers: [
    LoginService,
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true}
  ],
})
export class LoginModule { }