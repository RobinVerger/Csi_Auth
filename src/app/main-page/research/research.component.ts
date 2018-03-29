import { Component, OnInit } from '@angular/core';
import { ResearchService } from '../services/research.service';

@Component({
  selector: 'research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {
  
  
  constructor(
    private researchService : ResearchService
  ) { }

  ngOnInit() {}

}
