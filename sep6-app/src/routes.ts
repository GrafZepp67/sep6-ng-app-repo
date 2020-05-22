import { Routes } from '@angular/router';
import { SectionDummyComponent } from './app/sections/section-dummy/section-dummy.component';
import { SectionFlightsComponent } from './app/sections/section-flights/section-flights.component';
import { SectionWeatherComponent } from './app/sections/section-weather/section-weather.component';
import { SectionManufacturersComponent } from './app/sections/section-manufacturers/section-manufacturers.component';

export const appRoutes: Routes = [
    { path: 'dummy', component: SectionDummyComponent },
    { path: 'flights', component: SectionFlightsComponent },
    { path: 'weather', component: SectionWeatherComponent },
    { path: 'manufacturers', component: SectionManufacturersComponent },

    { path: '', redirectTo: '/dummy', pathMatch: 'full'}
];