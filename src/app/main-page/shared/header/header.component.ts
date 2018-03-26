import { Component, OnInit } from '@angular/core';

/* Services */
import { AuthService } from '../../../services/auth.service';
import { SidebarService } from '../../services/sidebar.service';

/* Router */
import { Router } from '@angular/router';

/* Output */
import { EventEmitter } from 'events';

/* Page */
import { MainPageComponent } from '../../main-page.component';

@Component({
  selector: 'main-page-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private auth: AuthService, 
    private router: Router,

    /* TO BE DELETED, CREATE AN EVENT EMITTER */
    private sideService : SidebarService) { }

  ngOnInit() {
  }

  /* TO BE DELETED, CREATE AN EVENT EMITTER */
  toggleSideBar(){
    this.sideService.sidebarData.toggle();
  }

  logout() {
    this.auth.logout();
    this.router.navigate([''], { replaceUrl : true });
  }
}