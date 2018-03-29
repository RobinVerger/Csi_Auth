import { Component, OnInit } from '@angular/core';

/* Services */
import { ResearchService } from '../../services/research.service';


@Component({
  selector: 'card-suspect',
  templateUrl: './card-suspect.component.html',
  styleUrls: ['./card-suspect.component.scss']
})
export class CardSuspectComponent implements OnInit {

  constructor(private researchService : ResearchService) { }

  ngOnInit() {
  }

}
