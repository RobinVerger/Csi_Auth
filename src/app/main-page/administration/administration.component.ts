import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {

  constructor() { }

  @ViewChild('nom') private name;
  ngOnInit() {
  }

  onSubmit(){
    
  }
  print(nom) {
    console.log(nom);
  }
}
