import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { ResearchService } from '../../services/research.service';
import { URL_LIST } from '../../../shared/data/URL-list';

@Component({
  selector: 'card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent implements OnInit {

  constructor(
    protected researchService : ResearchService,
    @Inject('url') private url: URL_LIST) {}
    
  @Output() tabReq = new EventEmitter<number>();
  @Output() editCard = new EventEmitter();
  @Output() delete = new EventEmitter();
  
  ngOnInit() {
  }

  // archiver() {
  //   this.researchService.deleteEntry(this.url.SPRING_URL_DELETE_, this.researchService.result$[0]['numeroDossier']).subscribe(res =>{
  //     console.log(res);
  //     console.log('user archived');
  //     })
  // }


  edit() {

    this.editCard.emit();
    this.tabReq.emit(2); //switch the tab to Administration
  }

}
