import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Utilities */
import { FlexLayoutModule } from '@angular/flex-layout';

/* Material */
import { MaterialImportsModule } from "../material-imports.module";

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

/* Test purpose */
import { TestBarModule } from '../test-bar/test-bar.module';
import { AuthService } from '../services/auth.service';
import { SidebarService } from './services/sidebar.service';
// import { ResearchContentComponent } from './research-content/research-content.component';
import { ResearchService } from './services/research.service';


@NgModule({
  imports: [
    CommonModule,
    MainPageRoutingModule,
    MaterialImportsModule,
    FlexLayoutModule,
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
   //   ResearchContentComponent,
  ],
  providers: [SidebarService, ResearchService]
})
export class MainPageModule { }
