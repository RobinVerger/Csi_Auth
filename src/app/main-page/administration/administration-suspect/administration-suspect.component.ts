import { Component, OnInit, ViewChild, Inject, EventEmitter, Output } from '@angular/core';
import { ResearchService } from '../../services/research.service';
import { URL_LIST } from '../../../shared/data/URL-list';
import {MatSnackBar} from '@angular/material';
import { HttpEvent, HttpErrorResponse } from '@angular/common/http';


import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'administration-suspect',
  templateUrl: './administration-suspect.component.html',
  styleUrls: ['./administration-suspect.component.scss']
})
export class AdministrationSuspectComponent {

  constructor(
    private researchService: ResearchService,
    @Inject('url') public url: URL_LIST,
    public snackBar: MatSnackBar
  ) {}

  @ViewChild('upDateForm') public formData;
  @Output() created = new EventEmitter();
  
  
  initForm() {
    this.formData = this.researchService.result$[0];
  }
  onSubmit(formData) {
    this.researchService.createEntry(this.url.SPRING_URL_POST_SUSPECT, formData).subscribe(res => this.snackBar.open('Suspect crée', 'OK'));
    
  }
  update() {
    console.log('button mis a jour');
    this.researchService.updateEntry(this.url.SPRING_URL_PUT_SUSPECT, this.formData, this.researchService.result$[0]['id']).do((ev: HttpEvent<any>) => { 
      if(ev) {
          this.snackBar.open('Suspect modifie', 'OK');  
      }
      return ev;
    }).catch( response => {
      if(response instanceof HttpErrorResponse) {
        this.snackBar.open('Une erreur s\'est produite', 'OK');
      }
      return Observable.throw(response);
    }).subscribe(res => console.log('suspect updated'));
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
