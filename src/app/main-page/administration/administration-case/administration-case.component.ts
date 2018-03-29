import { Component, OnInit, ViewChild } from '@angular/core';
import { ResearchService } from '../../services/research.service';

@Component({
  selector: 'administration-case',
  templateUrl: './administration-case.component.html',
  styleUrls: ['./administration-case.component.scss']
})
export class AdministrationCaseComponent implements OnInit {

 
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
