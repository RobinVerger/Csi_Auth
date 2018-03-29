import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Utilities */
import { FlexLayoutModule } from '@angular/flex-layout';

/* Material */
import { MaterialImportsModule } from "../material-imports.module";

/* Services */
import { AuthService } from '../services/auth.service';
import { SidebarService } from './services/sidebar.service';
import { ResearchService } from './services/research.service';

/* Routes */
import { MainPageRoutingModule } from './main-page-routing.module';

/* Pages */
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResearchComponent } from './research/research.component';
import { MainPageComponent } from './main-page.component';

/* Components */
import { HeaderComponent } from './shared/header/header.component';
import { BodyComponent } from './shared/body/body.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { ResearchContentComponent } from './research-content/research-content.component';
/* Cards */
import { CardCaseComponent } from './cards/card-case/card-case.component';
import { CardSuspectComponent } from './cards/card-suspect/card-suspect.component';


/* Test purpose */
import { TestBarModule } from '../test-bar/test-bar.module';
import { TestComponentComponent } from './shared/test-component/test-component.component';
import { AdministrationComponent } from './administration/administration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MainPageRoutingModule,
    MaterialImportsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    /* TESTBAR */
    TestBarModule

  ],
  declarations: [
      MainPageComponent,
      DashboardComponent,
      ResearchComponent,
      HeaderComponent,
      FooterComponent,
      BodyComponent,
      DashboardCardComponent,
      TestComponentComponent,
      ResearchContentComponent,
      CardSuspectComponent,
      CardCaseComponent,
      AdministrationComponent,

  ],
  providers: [
      SidebarService,
      ResearchService
    ]
})
export class MainPageModule { }
