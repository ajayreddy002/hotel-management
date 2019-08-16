import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SideNavComponent } from './shared/components/side-nav/side-nav.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component: HomeComponent, children: [
      { path: 'dashboard', loadChildren: () => import('./components/dashboard/dashboard.module').then(mod => mod.DashboardModule) },
      { path: 'calendar', loadChildren: () => import('./components/calendar/calendar.module').then(mod => mod.CalendarModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
