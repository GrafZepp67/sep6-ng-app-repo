import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionLoginComponent } from './sections/section-login/section-login.component';
import { SectionHomeComponent } from './sections/section-home/section-home.component';
import { AuthGuard } from "./services/auth-service/guard/auth.guard";
import { SecureInnerPagesGuard } from "./services/auth-service/guard/secure-inner-pages.guard";
import { SectionDashboardComponent } from './sections/section-dashboard/section-dashboard.component';
import { FlightsTabgroupComponent } from './tabgroups/flights-tabgroup/flights-tabgroup.component';
import { WeatherTabgroupComponent } from './tabgroups/weather-tabgroup/weather-tabgroup.component';
import { SectionWelcomeComponent } from './sections/section-welcome/section-welcome.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'login', component: SectionLoginComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'dashboard', component: SectionHomeComponent, canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'home', component: SectionWelcomeComponent},
      { path: 'flights', component: FlightsTabgroupComponent},
      { path: 'weather', component: WeatherTabgroupComponent},
      { path: 'manufacturers', component: WeatherTabgroupComponent},
    ]
  },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }