import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { ChartsModule } from 'ng2-charts';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule  } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AuthService } from '../app/services/auth-service/auth.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SectionDummyComponent } from './sections/section-dummy/section-dummy.component';
import { SectionFlightsComponent } from './sections/section-flights/section-flights.component';
import { SectionWeatherComponent } from './sections/section-weather/section-weather.component';
import { SectionManufacturersComponent } from './sections/section-manufacturers/section-manufacturers.component';
import { DummyDataService } from './services/data-service/dummy-data.service';
import { FlightsDataService } from './services/data-service/flights-data.service';
import { WeatherDataService } from './services/data-service/weather-data.service';
import { ManufacturerDataService } from './services/data-service/manufacturer-data.service';
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
import { ManufacturersTabgroupComponent } from './tabgroups/manufacturers-tabgroup/manufacturers-tabgroup.component';
import { ManufacturersPage1Component } from './pages/manufacturers/manufacturers-page1/manufacturers-page1.component';
import { ManufacturersPage2Component } from './pages/manufacturers/manufacturers-page2/manufacturers-page2.component';
import { ManufacturersPage3Component } from './pages/manufacturers/manufacturers-page3/manufacturers-page3.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { DummyTabgroupComponent } from './tabgroups/dummy-tabgroup/dummy-tabgroup.component';
import { DummyPage1Component } from './pages/dummy/dummy-page1/dummy-page1.component';
import { DummyPage2Component } from './pages/dummy/dummy-page2/dummy-page2.component';
import { DummyPage3Component } from './pages/dummy/dummy-page3/dummy-page3.component';
import { DummyPage4Component } from './pages/dummy/dummy-page4/dummy-page4.component';
import { DummyPage5Component } from './pages/dummy/dummy-page5/dummy-page5.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { BarChartmultiComponent } from './charts/bar-chartmulti/bar-chartmulti.component';
import { BarChartstackedComponent } from './charts/bar-chartstacked/bar-chartstacked.component';
import { ScatterChartComponent } from './charts/scatter-chart/scatter-chart.component';
import { SectionLoginComponent } from './sections/section-login/section-login.component';
import { SectionHomeComponent } from './sections/section-home/section-home.component';
import { SectionDashboardComponent } from './sections/section-dashboard/section-dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SectionDummyComponent,
    SectionFlightsComponent,
    SectionWeatherComponent,
    SectionManufacturersComponent,
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
    ManufacturersTabgroupComponent,
    ManufacturersPage1Component,
    ManufacturersPage2Component,
    ManufacturersPage3Component,
    ProgressSpinnerComponent,
    DummyTabgroupComponent,
    DummyPage1Component,
    DummyPage2Component,
    DummyPage3Component,
    DummyPage4Component,
    BarChartComponent,
    DummyPage5Component,
    BarChartmultiComponent,
    BarChartstackedComponent,
    ScatterChartComponent,
    SectionLoginComponent,
    SectionHomeComponent,
    SectionDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    ChartsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    LayoutModule,
    MatButtonModule
  ],
  providers: [
    DummyDataService,
    FlightsDataService,
    WeatherDataService,
    ManufacturerDataService,
    HttpClientModule,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
