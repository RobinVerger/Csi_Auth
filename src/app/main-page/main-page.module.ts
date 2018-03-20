import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Material */
import { MaterialImportsModule } from "../material-imports.module";

/* Routes */
import { MainPageRoutingModule } from './main-page-routing.module';
/* Child Components */
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResearchComponent } from './research/research.component';
import { MainPageComponent } from './main-page.component';

@NgModule({
  imports: [
    CommonModule,
    MainPageRoutingModule,
    MaterialImportsModule
  ],
  declarations: [
      MainPageComponent,
      DashboardComponent,
      ResearchComponent
  ]
})
export class MainPageModule { }
