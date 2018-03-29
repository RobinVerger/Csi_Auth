import { Component, OnInit, Output, EventEmitter } from '@angular/core';

/* Services */
import { ResearchService } from '../../services/research.service';


@Component({
  selector: 'card-case',
  templateUrl: './card-case.component.html',
  styleUrls: ['./card-case.component.scss']
})
export class CardCaseComponent implements OnInit {

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
