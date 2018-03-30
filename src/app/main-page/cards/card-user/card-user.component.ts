import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { ResearchService } from '../../services/research.service';
import { URL_LIST } from '../../../shared/data/URL-list';

@Component({
  selector: 'card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent implements OnInit {

  constructor(
    private researchService : ResearchService,
    @Inject('url') private url: URL_LIST) {}
    
  @Output() tabReq = new EventEmitter<number>();
  @Output() editCard = new EventEmitter();
  
  ngOnInit() {
  }

  edit() {
    this.editCard.emit();
    this.tabReq.emit(2); //switch the tab to Administration
  }

}
