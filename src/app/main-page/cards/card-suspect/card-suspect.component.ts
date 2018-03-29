import { Component, OnInit, Output, EventEmitter } from '@angular/core';

/* Services */
import { ResearchService } from '../../services/research.service';


@Component({
  selector: 'card-suspect',
  templateUrl: './card-suspect.component.html',
  styleUrls: ['./card-suspect.component.scss']
})
export class CardSuspectComponent implements OnInit {

  constructor(private researchService : ResearchService) { }

  @Output() tabReq = new EventEmitter<number>();
  @Output() editCard = new EventEmitter();
  
  ngOnInit() {
  }

  edit() {
    this.editCard.emit();
    this.tabReq.emit(2); //switch the tab to Administration
  }

}
