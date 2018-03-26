import { Component, OnInit, Input } from '@angular/core';
import { ICase } from '../../shared/models/ICase';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss']
})
export class DashboardCardComponent implements OnInit {

  constructor() { }

  @Input() userFav : ICase;

  ngOnInit() {  }

}
