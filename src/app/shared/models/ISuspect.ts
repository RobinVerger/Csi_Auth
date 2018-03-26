export interface ISuspect {
  id: number;
  nom: string;
  prenom: string;
  genre: string;
  dateNaissance: any;
  nationalite: string;
  taille: number;
  poids: number;
  adresseConnues: string;
  signeDistinctif: string;
  photo: string;
  empreinte: string;
  casierJudiciaire: boolean;
  condamnations: number;
  typeCondamnation: string;
  numEnquete: number;
}
