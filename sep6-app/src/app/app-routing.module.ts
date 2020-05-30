import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionFlightsComponent } from '../app/sections/section-flights/section-flights.component';
import { SectionWeatherComponent } from '../app/sections/section-weather/section-weather.component';
import { SectionManufacturersComponent } from '../app/sections/section-manufacturers/section-manufacturers.component';
import { SectionLoginComponent } from './sections/section-login/section-login.component';
import { SectionHomeComponent } from './sections/section-home/section-home.component';
import { AuthGuard } from "./services/auth-service/guard/auth.guard";
import { SecureInnerPagesGuard } from "./services/auth-service/guard/secure-inner-pages.guard";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: SectionLoginComponent, canActivate: [ SecureInnerPagesGuard ] },
  { path: 'home', component: SectionHomeComponent, canActivate: [AuthGuard] },
  { path: 'flights', component: SectionFlightsComponent, canActivate: [AuthGuard] },
  { path: 'weather', component: SectionWeatherComponent, canActivate: [AuthGuard] },
  { path: 'manufacturers', component: SectionManufacturersComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//canActivate: [ SecureInnerPagesGuard ]