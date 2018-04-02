import { Component, OnInit, Inject, ViewChild, Output, EventEmitter } from '@angular/core';

/* Services */
import { ResearchService } from '../services/research.service';

/* Router */
import { ActivatedRoute, Router } from '@angular/router';

/* Data */
import { ISuspect } from '../../shared/models/iSuspect';
import { URL_LIST } from '../../shared/data/URL-list';

/* Rxjs */
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

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

   dataSource : MatTableDataSource<any>;
   //typeOfRequest: string = '';
   researched: boolean = false; //boolean used in ngIf, tho hide the table if empty
   
   @ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild(MatSort) sort: MatSort;

   /* Event that change the Tab */
   @Output() tabReq = new EventEmitter<number>();

  constructor(
      private researchService: ResearchService,
      @Inject('url') public url: URL_LIST
    ) {}

  ngOnInit() {}
 

  /* Http Calls */

  /* Generic list getter */
  getList(path: string) {

    
    /* Request the data */
    this.researchService.getList(path)
    .subscribe(res => {
                          /* Define the type of table */
                          this.researchService.defineTypeTable(res.type);
                          res = res['data'];
                          this.dataSource = new MatTableDataSource<any>(res);
                          this.dataSource.paginator = this.paginator;
                          this.dataSource.sort = this.sort;
                          this.researched= true; //boolean used in ngIf, tho hide the table if empty
                         }
                        );
   }

   /* Generic Specific consultation */
   getSpecific(path, id){

     path = `${path}/${id}` //set the path based on id
     this.researchService.getSpecific(path)
                         .subscribe(res => {
                           
                          /* Store the data inside the service */ 
                          this.researchService.result$ = res['data'];
                          console.log(this.researchService.result$);
                          /* Set up the resultType */
                          switch(res.type){
                            case "suspect":
                            this.researchService.resultType = "suspect";
                            break;
                            case "enquete":
                            this.researchService.resultType = "case";
                            break;
                            case "agent":
                            this.researchService.resultType = "user";
                            break;
                           }

                           /* Enable tab Detail */
                           this.researchService.detailTabIsDisabled = false;
                           this.tabReq.emit(1); //switch the tab to Detail
                          });

   }

   /* Filtering method */
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    console.log(this.dataSource);
  }

}
