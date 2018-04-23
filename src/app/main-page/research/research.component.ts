import { Component, OnInit, ViewChild } from '@angular/core';
import { ResearchService } from '../services/research.service';
import { TestComponentComponent } from "../shared/test-component/test-component.component";
import { AdministrationComponent } from '../administration/administration.component';
import { ResearchContentComponent } from '../research-content/research-content.component';
@Component({
  selector: 'research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {
  
  
  constructor(
    private researchService : ResearchService,
  ) { }

  @ViewChild(AdministrationComponent) public admin: AdministrationComponent;
  @ViewChild(ResearchContentComponent) public researchComp : ResearchContentComponent;

  ngOnInit() {
  }

 

}
