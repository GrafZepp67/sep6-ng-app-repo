import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionFlightsComponent } from '../app/sections/section-flights/section-flights.component';
import { SectionWeatherComponent } from '../app/sections/section-weather/section-weather.component';
import { SectionManufacturersComponent } from '../app/sections/section-manufacturers/section-manufacturers.component';
import { SectionLoginComponent } from './sections/section-login/section-login.component';
import { SectionHomeComponent } from './sections/section-home/section-home.component';
import { AuthGuard } from "./services/auth-service/guard/auth.guard";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: SectionLoginComponent },
  { path: 'home', component: SectionHomeComponent, canActivate: [AuthGuard] },
  { path: 'flights', component: SectionFlightsComponent },
  { path: 'weather', component: SectionWeatherComponent },
  { path: 'manufacturers', component: SectionManufacturersComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
