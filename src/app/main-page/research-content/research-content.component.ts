import { Component, OnInit, Inject } from '@angular/core';


/* Data */
import { ISuspect } from '../../shared/models/iSuspect';
import { ActivatedRoute, Router } from '@angular/router';
import { ResearchService } from '../services/research.service';

/* Rxjs */
import { Observable } from "rxjs/Observable";

/* Utilities */
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'research-content',
  templateUrl: './research-content.component.html',
  styleUrls: ['./research-content.component.scss']
})
export class ResearchContentComponent implements OnInit {

   suspects$: ISuspect[];
   
   /* Table config */
   displayedColumns = ['position', 'name', 'weight', 'symbol'];
   dataSource = new MatTableDataSource<Element>(this.ELEMENT_DATA);;


  constructor(
      private researchService: ResearchService,
      @Inject('mock_values') private ELEMENT_DATA : Element[]
    ) {}

  ngOnInit() {
    console.log(this.dataSource);
   }
 
   getAllSuspect() {
     this.researchService.getAllSuspects().subscribe(res => this.suspects$ = res );
   }

}
