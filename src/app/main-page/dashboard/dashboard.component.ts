import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userList$: Observable<any>;

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  getUserList() {
    this.api.get('http://localhost:4242/api/user')
    .do(data => console.log(data))
        .subscribe(data => {
          this.userList$ = data;
        });
  }
}
