import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Utilities */
import { FlexLayoutModule } from '@angular/flex-layout';

/* Material */
import { MaterialImportsModule } from "../material-imports.module";

/* Routes */
import { MainPageRoutingModule } from './main-page-routing.module';

/* Child Components */
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResearchComponent } from './research/research.component';
import { MainPageComponent } from './main-page.component';

/* Page Layout */
import { HeaderComponent } from './shared/header/header.component';
import { BodyComponent } from './shared/body/body.component';
import { FooterComponent } from './shared/footer/footer.component';

/* Test purpose */
import { TestBarModule } from '../test-bar/test-bar.module';
import { AuthService } from '../services/auth.service';
import { SidebarService } from './services/sidebar.service';

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
  ],
  providers: [SidebarService]
})
export class MainPageModule { }
