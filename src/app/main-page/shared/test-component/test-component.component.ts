import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ResearchComponent } from '../../research/research.component';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss']
})
export class TestComponentComponent implements OnInit {

  constructor() { }

  @Output() tabReq = new EventEmitter<number>();
  ngOnInit() {}

  buttonClicked() {
    console.log('event Emitted');
    this.tabReq.emit(1);
  }
}
