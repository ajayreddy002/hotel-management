import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SideNavComponent } from './shared/components/side-nav/side-nav.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    canActivate: [AuthGuard],
    path: 'home', component: HomeComponent, children: [
      { path: 'dashboard', loadChildren: () => import('./components/dashboard/dashboard.module').then(mod => mod.DashboardModule) },
      { path: 'calendar', loadChildren: () => import('./components/calendar/calendar.module').then(mod => mod.CalendarModule) },
      { path: 'hrpayroll', loadChildren: () => import('./components/hrpayroll/hrpayroll.module').then(mod => mod.HrpayrollModule)}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

