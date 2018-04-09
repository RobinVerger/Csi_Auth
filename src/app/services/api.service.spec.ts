import { TestBed, inject } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { URL_LIST } from '../shared/data/URL-list';
import { AuthService } from './auth.service';
import { Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { AppModule } from '../app.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule],
      providers: [ApiService, AuthService]
    });
  });

  it('should make a call', inject([ApiService, HttpTestingController], (service: ApiService, httpMock: HttpTestingController) => {
    
    service.get("http://localhost:8080/csi/suspects")
           .subscribe( res => {
             expect(res).toBe(Object);
           });

           const req = httpMock.expectOne('http://localhost:8080/csi/suspects', 'call to API with GET');

           expect(req.request.method).toBe('GET');


           httpMock.verify();

  }));
});
