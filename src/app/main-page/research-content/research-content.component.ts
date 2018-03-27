import { Component, OnInit, Inject, ViewChild } from '@angular/core';


/* Data */
import { ISuspect } from '../../shared/models/iSuspect';
import { ActivatedRoute, Router } from '@angular/router';
import { ResearchService } from '../services/research.service';

/* Rxjs */
import { Observable } from "rxjs/Observable";

/* Utilities */
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'research-content',
  templateUrl: './research-content.component.html',
  styleUrls: ['./research-content.component.scss']
})
export class ResearchContentComponent implements OnInit {

   suspects$: ISuspect[];

   /* Table config */
   displayedColumns = ['numero', 'nom', 'prenom'];
   dataSource = new MatTableDataSource<ISuspect>(this.suspects$);
   @ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild(MatSort) sort: MatSort;

  constructor(
      private researchService: ResearchService,
      @Inject('mock_values') private ELEMENT_DATA : Element[]
    ) {}

    /* LifeCycle Methods */
  ngOnInit() {
    this.getAllSuspects();
    console.log(this.dataSource);
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
 
  /* Http Call */
   getAllSuspects() {
     this.researchService.getAllSuspects()
                         .do(res =>  console.log(res[0]['nom']))
                         .subscribe(res => this.suspects$ = res);
   }

   /* Filtering method */
   applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    console.log(this.dataSource);
  }

}
