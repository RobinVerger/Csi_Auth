import { Component, OnInit, ViewChild } from '@angular/core';
import { ResearchService } from '../../services/research.service';

@Component({
  selector: 'administration-suspect',
  templateUrl: './administration-suspect.component.html',
  styleUrls: ['./administration-suspect.component.scss']
})
export class AdministrationSuspectComponent implements OnInit {

  constructor(
    private researchService: ResearchService
  ) {}

  @ViewChild('upDateForm') public formData;

  
  ngOnInit() {
    
  }
  
  onSubmit() {
  }
  
  initForm() {
    this.formData = this.researchService.result$[0];
  }
  clearForm() {
    this.formData = {};
  }

}
