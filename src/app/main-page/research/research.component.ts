import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {
  
  currentIndex: number = 0;
  constructor() { }

  ngOnInit() {
  }

  setIndex() {
    this.currentIndex = 1;
  }
  killIndex() {
    this.currentIndex--;
  }
  log(event){
    console.log(event);
  }
}
