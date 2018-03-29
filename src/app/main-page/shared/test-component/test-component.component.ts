import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ResearchService } from '../../services/research.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ISuspectModel } from '../../../shared/models/ISuspectModel';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss']
})
export class TestComponentComponent implements OnInit {

  constructor(
    public researchService : ResearchService
  ) { }


  updateForm: FormGroup;
  
  suspectModel: ISuspectModel = {
    nom : {
      label: 'Nom',
      placeholder: 'Nom',
      value: 'Juri', //to change
      type: 'text',
      required: true,
      minlength: 3
    },
    prenom : {
      label: 'Prenom',
      placeholder: 'Nom',
      value: 'Johnson',//to change
      type: 'text',
      required: true,
      minlength: 3
    },
    dateNaissance : {
      label: 'Date de Naissance',
      value: '1988-11-26',//to change
      type: 'date',
    },
    nationalite : {
      label: 'Nationalité',
      placeholder: 'Nationalité',
      value: 'xxx', //to change
      type: 'text',
    },
    taille : {
      label: 'Taille',
      placeholder: 'Taille',
      value: 1, //to change
      type: 'number',
    },
    poids : {
      label: 'Poids',
      placeholder: 'Poids',
      value: 1222 , //to change
      type: 'number',
    },
    adresseConnues : {
      label: 'Adresse',
      placeholder: 'Adresse',
      value: 'xxxxxxxx', //to change
      type: 'text',
    },
    signeDistinctif : {
      label: 'Signe distinctif',
      placeholder: 'Signe distinctif',
      value: 'xxxxxxx', //to change
      type: 'text',
    },
    photo : {
      label: 'Photo',
      placeholder: 'Photo',
      value: 'xxxxxxx', //to change
      type: 'text',
    },
    empreinte : {
      label: 'Empreinte',
      placeholder: 'Empreinte',
      value: 'xxxxxxx', //to change
      type: 'text',
    },
    condamnations : {
      label: 'Nombre de condamnations',
      placeholder: 'Nombre de condamnations',
      value: null, //to change
      type: 'number',
    },
    genre: {
      label: 'Genre',
      value: '', 
      type: 'radio',
      options: [
        {label: 'Male', value: 'M'}, //to change
        {label: 'Female', value: 'F'}, //to change
      ],
      required: true
    },
    casierJudiciaire: {
      label: 'Le suspect a un casier :',
      value: '', //to change
      type: 'radio',
      options: [
        {label: 'Oui', value: true }, //to change
        {label: 'Non', value: false } //to change
      ]
    },
    typeCondamnation: {
      label: 'typeCondamnation',
      type: 'select',
      value: 'Vol qualifié', //to change
      options: [
        {label: 'Tentative de meurtre', value:'Tentative de meurtre'}, 
        {label: 'Vol qualifié', value:'Vol qualifié'},
        {label: 'voies de fait graves', value:'voies de fait graves'},
        {label: 'Menaces', value:'Menaces'},
        {label: 'Harcelement', value:'Harcelement'},
        {label: 'Fraude', value:'Fraude'},
        {label: 'Defaut de comparaitre', value:'Defaut de comparaitre'},
        {label: 'Infractions relative aux armes', value:'Infractions relative aux armes'},
        {label: 'Prostitution', value:'Possession de drogue'},
        {label: 'trafic de drogues', value:'trafic de drogues'},
      ]
    }
  }

  formDataObject = this.suspectModel;

  /* Form model */
  model=[];



  ngOnInit() {
    /* Create a final version of the dataObject */
    const formDataObject= {};

    /* Create the field based on the persistent formDataObject */
    for(const prop of Object.keys(this.formDataObject)) {
      formDataObject[prop] = new FormControl(this.formDataObject[prop].value);
      /* Create fields inside of the model */
      this.model.push({
        key: prop,
        label: this.formDataObject[prop].label,
        type: this.formDataObject[prop].type,
        placeholder: this.formDataObject[prop].placeholder,
        value: this.formDataObject[prop].value,
        options: this.formDataObject[prop].options,
        required: this.formDataObject[prop].required,
        minlength: this.formDataObject[prop].minlength,
      })
    }
    this.updateForm = new FormGroup(formDataObject);
  }

  onSubmit(){
    
  }

}
