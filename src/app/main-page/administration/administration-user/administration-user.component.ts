import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { ResearchService } from '../../services/research.service';
import { URL_LIST } from '../../../shared/data/URL-list';

@Component({
  selector: 'administration-user',
  templateUrl: './administration-user.component.html',
  styleUrls: ['./administration-user.component.scss']
})
export class AdministrationUserComponent implements OnInit {

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
    this.researchService.createEntry(this.url.SPRING_URL_POST_USER, formData).subscribe(res => console.log('user created'));
    
  }
  update() {
    this.researchService.updateEntry(this.url.SPRING_URL_PUT_USER, this.formData, this.researchService.result$[0]['id']).subscribe(res => console.log('user updated'));
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
