import { Component, OnInit, ViewChild } from '@angular/core';

/* Services */
import { ResearchService } from '../../services/research.service';

/* Rxjs */
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

/* Utilities */
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table-suspect',
  templateUrl: './table-suspect.component.html',
  styleUrls: ['./table-suspect.component.scss']
})
export class TableSuspectComponent implements OnInit {

  dataSource: MatTableDataSource<any>;
   data: Object[];
   
   /* Table config */
   displayedColumns = ['id', 'nom', 'prenom'];
   
   @ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild(MatSort) sort: MatSort;

  constructor(private researchService: ResearchService) { }

  ngOnInit() {
  }

  /* Http Call */
  getList(path) {
    this.researchService.getList(path)
                        .subscribe(res => {
                         this.data = res;
                         this.dataSource = new MatTableDataSource<any>(this.data);
                         this.dataSource.paginator = this.paginator;
                         this.dataSource.sort = this.sort;
                        }
                       );
  }

  /* Filtering method */
  applyFilter(filterValue: string) {
   filterValue = filterValue.trim(); // Remove whitespace
   filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
   this.dataSource.filter = filterValue;
   console.log(this.dataSource);
 }
}
