import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  constructor() { }

  sidebarData;
  
  pages = [
    {
      componentName: "Accueil",
      path: "dashboard"
    },
    {
      componentName: "Recherche",
      path: "search"
    },
  ]
}
