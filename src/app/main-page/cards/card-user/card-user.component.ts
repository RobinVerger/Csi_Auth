import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent implements OnInit {

  @Output() tabReq = new EventEmitter<number>();
  @Output() editCard = new EventEmitter();
  
  ngOnInit() {
  }

  edit() {
    this.editCard.emit();
    this.tabReq.emit(2); //switch the tab to Administration
  }

}
