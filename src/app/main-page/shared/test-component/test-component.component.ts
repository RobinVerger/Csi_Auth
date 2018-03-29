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
  
  suspectModel = {
    nom : {
      label: 'nom',
      placeholder: 'Nom',
      value: 'Juri',
      type: 'text',
      required: true,
      minlength: 3
    },
    prenom : {
      label: 'prenom',
      placeholder: 'Nom',
      value: 'Johnson',
      type: 'text',
      required: true
    },
    genre: {
      label: 'genre',
      value: '',
      type: 'radio',
      options: [
        {label: 'Male', value: 'M'},
        {label: 'Female', value: 'F'},
      ],
      required: true
    },
    typeCondamnation: {
      label: 'typeCondamnation',
      type: 'select',
      value: 'Vol qualifié',
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
