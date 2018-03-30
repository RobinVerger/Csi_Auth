import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { ResearchService } from '../../services/research.service';
import { URL_LIST } from '../../../shared/data/URL-list';

@Component({
  selector: 'administration-case',
  templateUrl: './administration-case.component.html',
  styleUrls: ['./administration-case.component.scss']
})
export class AdministrationCaseComponent implements OnInit {

 
  constructor(
    private researchService: ResearchService,
    @Inject('url') private url: URL_LIST
  ) {}

  @ViewChild('upDateForm') public formData;
  
  ngOnInit() {
  }
  
  initForm() {
    this.formData = this.researchService.result$[0];
  }
  onSubmit(formData) {
    this.researchService.createEntry(this.url.SPRING_URL_POST_CASE, formData).subscribe(res => console.log('case created'));
  }
  update() {
    this.researchService.updateEntry(this.url.SPRING_URL_PUT_CASE, this.formData, this.researchService.result$[0]['id']).subscribe(res => console.log('case updated'));
  }
  clearForm() {
    this.formData = {};
  }

  suspectSwitch() {
    this.clearForm();
    this.researchService.resultType = 'suspect';
  }
  caseSwitch() {
    this.clearForm();
    this.researchService.resultType = 'case';
  }
  userSwitch() {
    this.clearForm();
    this.researchService.resultType = 'user';
  }
  
}
