import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Utilities */
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from '@angular/flex-layout';

/* Routes */
import { AppRoutingModule } from './app-routing.module';

/* Material */
import { MaterialImportsModule } from "./material-imports.module";

/* Child Components */
import { AppComponent } from './app.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

/* Http */
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { HeaderInterceptor } from "./services/http-header-interceptor";

/* Service */
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';

/* Data Storage */
import { URL_LIST } from './shared/data/URL-list'; // all url used

/* Test Purpose */
import { TestBarModule } from './test-bar/test-bar.module';



@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    TestBarModule.forRoot()
    
  ],
  providers: [
    ApiService,
    AuthService,
    AuthGuard,
    { provide: 'url', useClass: URL_LIST },
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
