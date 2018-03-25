import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';
import { MainPageComponent } from '../../main-page.component';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'main-page-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private auth: AuthService, 
    private router: Router,
    private sideService : SidebarService) { }

  ngOnInit() {
  }

  toggleSideBar(){
    this.sideService.sidebarData.toggle();
  }

  logout() {
    this.auth.logout();
    this.router.navigate([''], { replaceUrl : true });
  }
}