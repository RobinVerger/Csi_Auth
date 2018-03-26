import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainPageComponent } from './main-page.component';
import { ResearchComponent } from './research/research.component';
import { AuthGuard } from '../services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
      children: [
        { 
          path: '', 
          redirectTo: 'dashboard', 
          pathMatch: 'full', 
          canActivate: [AuthGuard] 
        },
        { path: 'dashboard',
          component: DashboardComponent,
          canActivate: [AuthGuard]
        },
        { path: 'search',
          component: ResearchComponent,
          canActivate: [AuthGuard]
        },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
