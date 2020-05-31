import { Component } from '@angular/core';
import { DummyDataService } from './services/data-service/dummy-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  title = 'sep6-app';
  subtitle = 'MySubtitle';  
}
