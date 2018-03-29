import { Component, OnInit } from '@angular/core';

/* Services */
import { ResearchService } from '../../services/research.service';

@Component({
  selector: 'card-case',
  templateUrl: './card-case.component.html',
  styleUrls: ['./card-case.component.scss']
})
export class CardCaseComponent implements OnInit {

  constructor(private researchService : ResearchService) { }

  ngOnInit() {
  }

}
