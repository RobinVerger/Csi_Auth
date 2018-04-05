import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { ResearchService } from '../../services/research.service';
import { URL_LIST } from '../../../shared/data/URL-list';
import { HttpResponse, HttpEvent, HttpErrorResponse } from "@angular/common/http";

import {MatSnackBar} from '@angular/material';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Component({
  selector: 'administration-user',
  templateUrl: './administration-user.component.html',
  styleUrls: ['./administration-user.component.scss']
})



export class AdministrationUserComponent implements OnInit {

  constructor(
    private researchService: ResearchService,
    @Inject('url') public url: URL_LIST,
    public snackBar: MatSnackBar
  ) {}

  @ViewChild('upDateForm') public formData;

  
  ngOnInit() {
    
  }
  
  
  initForm() {
    this.formData = this.researchService.result$[0];
  }
  onSubmit(formData) {
    this.researchService.createEntry(this.url.SPRING_URL_POST_USER, formData).subscribe(res => this.snackBar.open('Agent crée', 'OK'));
    
  }
  update() {
    this.researchService.updateEntry(this.url.SPRING_URL_PUT_USER, this.formData, this.researchService.result$[0]['id']).do((ev: HttpEvent<any>) => { 
      if(ev) {
          this.snackBar.open('Agent modifie', 'OK');  
      }
      return ev;
    }).catch( response => {
      if(response instanceof HttpErrorResponse) {
        this.snackBar.open('Une erreur s\'est produite', 'OK');
      }
      return Observable.throw(response);
    }).subscribe(res => console.log(res))
      
      
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
