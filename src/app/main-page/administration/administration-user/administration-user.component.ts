import { Component, OnInit, ViewChild } from '@angular/core';
import { ResearchService } from '../../services/research.service';

@Component({
  selector: 'administration-user',
  templateUrl: './administration-user.component.html',
  styleUrls: ['./administration-user.component.scss']
})
export class AdministrationUserComponent implements OnInit {

  
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
