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
import { TabgroupComponent } from './tabgroup/tabgroup.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlightsTabgroupComponent } from './tabgroups/flights-tabgroup/flights-tabgroup.component';
import { FlightsPage1Component } from './pages/flights/flights-page1/flights-page1.component';
import { FlightsPage2Component } from './pages/flights/flights-page2/flights-page2.component';
import { FlightsPage3Component } from './pages/flights/flights-page3/flights-page3.component';
import { FlightsPage4Component } from './pages/flights/flights-page4/flights-page4.component';
import { WeatherTabgroupComponent } from './tabgroups/weather-tabgroup/weather-tabgroup.component';
import { WeatherPage1Component } from './pages/weather/weather-page1/weather-page1.component';
import { WeatherPage2Component } from './pages/weather/weather-page2/weather-page2.component';
import { WeatherPage3Component } from './pages/weather/weather-page3/weather-page3.component';
import { WeatherPage4Component } from './pages/weather/weather-page4/weather-page4.component';
import { WeatherPage5Component } from './pages/weather/weather-page5/weather-page5.component';
import { ManufacturersTabgroupComponent } from './tabgroups/manufacturers-tabgroup/manufacturers-tabgroup.component';
import { ManufacturersPage1Component } from './pages/manufacturers/manufacturers-page1/manufacturers-page1.component';
import { ManufacturersPage2Component } from './pages/manufacturers/manufacturers-page2/manufacturers-page2.component';
import { ManufacturersPage3Component } from './pages/manufacturers/manufacturers-page3/manufacturers-page3.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SectionDummyComponent,
    SectionFlightsComponent,
    SectionWeatherComponent,
    SectionManufacturersComponent,
    TabgroupComponent,
    FlightsTabgroupComponent,
    FlightsPage1Component,
    FlightsPage2Component,
    FlightsPage3Component,
    FlightsPage4Component,
    WeatherTabgroupComponent,
    WeatherPage1Component,
    WeatherPage2Component,
    WeatherPage3Component,
    WeatherPage4Component,
    WeatherPage5Component,
    ManufacturersTabgroupComponent,
    ManufacturersPage1Component,
    ManufacturersPage2Component,
    ManufacturersPage3Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    HttpClientModule,
    MatTabsModule,
    BrowserAnimationsModule
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
