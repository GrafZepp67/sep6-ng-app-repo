import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { appRoutes } from '../../src/routes';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SectionDummyComponent } from './sections/section-dummy/section-dummy.component';
import { SectionFlightsComponent } from './sections/section-flights/section-flights.component';
import { SectionWeatherComponent } from './sections/section-weather/section-weather.component';
import { SectionManufacturersComponent } from './sections/section-manufacturers/section-manufacturers.component';
import { DummyDataService } from './services/dummy-data.service';
import { FlightsDataService } from './services/flights-data.service';
import { WeatherDataService } from './services/weather-data.service';
import { ManufacturerDataService } from './services/manufacturer-data.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SectionDummyComponent,
    SectionFlightsComponent,
    SectionWeatherComponent,
    SectionManufacturersComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DummyDataService,
    FlightsDataService,
    WeatherDataService,
    ManufacturerDataService,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
