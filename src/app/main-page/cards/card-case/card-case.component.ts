import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';

/* Services */
import { ResearchService } from '../../services/research.service';
import { URL_LIST } from '../../../shared/data/URL-list';


@Component({
  selector: 'card-case',
  templateUrl: './card-case.component.html',
  styleUrls: ['./card-case.component.scss']
})
export class CardCaseComponent implements OnInit {

  constructor(
      private researchService : ResearchService,
      @Inject('url') private url: URL_LIST
    ){}

  @Output() tabReq = new EventEmitter<number>();
  @Output() editCard = new EventEmitter();
  @Output() delete = new EventEmitter();

  ngOnInit() {
  }

  archiver() {
    this.researchService.deleteEntry(this.url.SPRING_URL_DELETE_CASE, this.researchService.result$[0]['numeroDossier']).subscribe(res =>{
      this.tabReq.emit(0); //switch the tab to research
      this.delete.emit(); //delete data
      })
  }
  
  edit() {
    this.editCard.emit();
    this.tabReq.emit(2); //switch the tab to Administration
  }
}
