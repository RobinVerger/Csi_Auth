import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  contacts;
  constructor(private api: ApiService){}
  
  httpCall() {
    this.api.get('http//blabla')
    .subscribe(data => this.contacts = data);
  }
  generateToken() {
    localStorage.setItem('contact-manager-jwt', 'randomToken');
    console.log('setting local');
  }
}
