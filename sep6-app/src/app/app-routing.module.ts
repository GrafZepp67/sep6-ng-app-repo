import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionDummyComponent } from '../app/sections/section-dummy/section-dummy.component';
import { SectionFlightsComponent } from '../app/sections/section-flights/section-flights.component';
import { SectionWeatherComponent } from '../app/sections/section-weather/section-weather.component';
import { SectionManufacturersComponent } from '../app/sections/section-manufacturers/section-manufacturers.component';

const routes: Routes = [
  { path: '', redirectTo: '/dummy', pathMatch: 'full'},
  { path: 'dummy', component: SectionDummyComponent },
  { path: 'flights', component: SectionFlightsComponent },
  { path: 'weather', component: SectionWeatherComponent },
  { path: 'manufacturers', component: SectionManufacturersComponent },
  { path: '**', redirectTo: '/dummy', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
