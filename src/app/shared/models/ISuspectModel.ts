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
  }

};

