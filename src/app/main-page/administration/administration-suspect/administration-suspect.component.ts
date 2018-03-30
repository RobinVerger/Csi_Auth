import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { ResearchService } from '../../services/research.service';
import { URL_LIST } from '../../../shared/data/URL-list';

@Component({
  selector: 'administration-suspect',
  templateUrl: './administration-suspect.component.html',
  styleUrls: ['./administration-suspect.component.scss']
})
export class AdministrationSuspectComponent implements OnInit {

  constructor(
    private researchService: ResearchService,
    @Inject('url') public url: URL_LIST
  ) {}

  @ViewChild('upDateForm') public formData;

  
  ngOnInit() {
    
  }
  
  
  initForm() {
    this.formData = this.researchService.result$[0];
  }
  onSubmit(formData) {
    console.log('button creer');
    this.researchService.createEntry(this.url.SPRING_URL_POST_SUSPECT, formData).subscribe(res => console.log('suspect created'));
    
  }
  update() {
    console.log('button mis a jour');
    this.researchService.updateEntry(this.url.SPRING_URL_PUT_SUSPECT, this.formData, this.researchService.result$[0]['id']).subscribe(res => console.log('suspect updated'));
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
