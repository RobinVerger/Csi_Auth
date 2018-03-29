// export interface ISuspectModel {

//   nom: {
//     name:string};
//   prenom: string;
//   genre: string;
//   dateNaissance: any;
//   nationalite: string;
//   taille: number;
//   poids: number;
//   adresseConnues: string;
//   signeDistinctif: string;
//   photo: string;
//   empreinte: string;
//   casierJudiciaire: boolean;
//   condamnations: number;
//   typeCondamnation: string;

// }

export interface ISuspectModel {

  nom: {
    label: string,
    placeholder: string,
    value: string,
    type: string,
    required: boolean,
    minlength: number
  },
  prenom : {
    label: string,
    placeholder: string,
    value: string,
    type: string,
    required: boolean,
    minlength: number
  },
  dateNaissance : {
    label: string,
    value: string,
    type: string,
  },
  nationalite : {
    label: string,
    placeholder: string,
    value: string,
    type: string,
  },
  taille : {
    label: string,
    placeholder: string,
    value: number,
    type: string,
  },
  poids : {
    label: string,
    placeholder: string,
    value: number,
    type: string,
  },
  adresseConnues : {
    label: string,
    placeholder: string,
    value: string,
    type: string,
  },
  signeDistinctif : {
    label: string,
    placeholder: string,
    value: string,
    type: string,
  },
  photo : {
    label: string,
    placeholder: string,
    value: string,
    type: string,
  },
  empreinte : {
    label: string,
    placeholder: string,
    value: string,
    type: string,
  },
  condamnations : {
    label: string,
    placeholder: string,
    value: number,
    type: string,
  },
  genre: {
    label: string,
    value: string,
    type: string,
    options: [
      {label: string, value: string },
      {label: string, value: string }
    ],
    required: boolean
  },
  casierJudiciaire: {
    label: string,
    value: string,
    type: string,
    options: [
      {label: string, value: boolean },
      {label: string, value: boolean }
    ]
  },
  typeCondamnation: {
    label: string,
    type: string,
    value: string,
    options: [
      { label: string, value:string },
      { label: string, value: string },
      { label: string, value: string },
      { label: string, value: string },
      { label: string, value: string },
      { label: string, value: string },
      { label: string, value: string },
      { label: string, value: string },
      { label: string, value: string },
      { label: string, value: string }
    ]
  }

};

