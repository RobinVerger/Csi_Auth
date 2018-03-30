import { Component, OnInit, Inject, ViewChild, Input } from '@angular/core';
import { ResearchService } from '../../services/research.service';
import { URL_LIST } from '../../../shared/data/URL-list';

@Component({
  selector: 'administration-link',
  templateUrl: './administration-link.component.html',
  styleUrls: ['./administration-link.component.scss']
})
export class AdministrationLinkComponent implements OnInit {

  constructor(
      private researchService: ResearchService,
      @Inject('url') private url: URL_LIST
    ) { }

    @ViewChild('linkForm') public link;
    @Input('typeSwitch') public typeSwitch;
    
  ngOnInit() {
  }

  onSubmit( linkForm) {
    this.researchService.createEntry(this.typeSwitch, linkForm).subscribe(res => console.log(res));
  }

}
