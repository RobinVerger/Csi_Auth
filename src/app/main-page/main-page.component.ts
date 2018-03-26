import { Component, OnInit, Inject, ViewChild, ElementRef, ViewChildren } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidebarService } from './services/sidebar.service';
import { TestBarParamsService } from '../test-bar/services/test-bar-params.service';
import { HeaderComponent } from './shared/header/header.component';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(
    private sideService : SidebarService
  ) { }

  @ViewChild('sidenav')
    public sidenav;

  @ViewChild(HeaderComponent) public header;

  
  ngOnInit() {
    this.sideService.sidebarData = this.sidenav;
  }
}
