import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
@Injectable()
export class AuthService {

  storageKey: string = 'contact-manager-jwt';

  constructor(private router : Router) { }

  setToken(resp) {
    localStorage.setItem(this.storageKey, resp.token);
  }
  getToken() {
    return localStorage.getItem(this.storageKey);
  }
  isLoggedIn() {
    return this.getToken() !== null;
  }
  logout() {
    localStorage.removeItem(this.storageKey);
    this.router.navigate(['login']);
  }

}
