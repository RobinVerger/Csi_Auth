import { Component, OnInit, Inject, ViewChild, Input, EventEmitter, Output } from '@angular/core';
import { ResearchService } from '../../services/research.service';
import { URL_LIST } from '../../../shared/data/URL-list';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'administration-link',
  templateUrl: './administration-link.component.html',
  styleUrls: ['./administration-link.component.scss']
})
export class AdministrationLinkComponent implements OnInit {

  constructor(
      private researchService: ResearchService,
      @Inject('url') private url: URL_LIST,
      public snackBar: MatSnackBar
    ) { }


    @ViewChild('linkForm') public link;
    @Input('typeSwitch') public typeSwitch;
    
  ngOnInit() {
  }

  onSubmit( linkForm) {
    this.researchService.createEntry(this.typeSwitch, linkForm).subscribe(res => this.snackBar.open('Suspect crée', 'OK'));
  }

}
