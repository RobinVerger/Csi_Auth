import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  NgForm
} from '@angular/forms';
import { ResearchService } from '../services/research.service';

@Component({
  selector: 'administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {

  constructor(
    private researchService: ResearchService
  ) {}

  @ViewChild('upDateForm') public formData;
  test = {
    nom: "",
    prenom: "blablablabla",
    genre: "",
    dateNaissance: "",
    nationalite: "",
    taille: "",
    poids: "",
    adresseConnues: "",
    signeDistinctif: "",
    photo: "",
    empreinte: "",
    casierJudiciaire: "",
    condamnations: "",
    typeCondamnation: ""
  }
  
  ngOnInit() {
  }
  
  onSubmit() {
    
  }
  
  initForm() {
    this.formData = this.researchService.result$[0];
  }

}
