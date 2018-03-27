import { Component, OnInit, Inject, ViewChild } from '@angular/core';

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
   typeOfRequest: string = '';
   researched: boolean = false;
   
   @ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild(MatSort) sort: MatSort;


  constructor(
      public researchService: ResearchService,
      @Inject('url') public url: URL_LIST,
      private router: Router
    ) {}

    /* LifeCycle Methods */
  ngOnInit() {}
 

  /* Http Call */
  getList(path: string, typeData: string) {

    /* Define the type of table */
    this.researchService.defineTypeTable(typeData);

     /* Request the data */
     this.researchService.getList(path)
                         .subscribe(res => {
                          this.dataSource = new MatTableDataSource<any>(res);
                          this.dataSource.paginator = this.paginator;
                          this.dataSource.sort = this.sort;
                          this.researched= true;
                         }
                        );
   }

   suspectSpecific(path,id){
     path = `${path}/${id}`
     console.log(path);
     // this.researchService.getSpecific(path)
       //                   .subscribe(res => console.log(res));
   }

   /* Filtering method */
   applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    console.log(this.dataSource);
  }

}
