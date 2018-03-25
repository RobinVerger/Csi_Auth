import { Injectable } from '@angular/core';

@Injectable()
export class TestBarParamsService {

  constructor() { }

  isVisible: boolean = false;

  toggleVisibility(){
    this.isVisible = !this.isVisible;
  }
}
