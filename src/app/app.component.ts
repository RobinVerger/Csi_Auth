import { Component } from '@angular/core';

/* Services */
import { ApiService } from './services/api.service';
import { TestBarParamsService } from './test-bar/services/test-bar-params.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  ngOnInit(){}
constructor(public tsB : TestBarParamsService) {}

}
