import { Component } from '@angular/core';
import { DummyDataService } from './services/dummy-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DummyDataService]
})
export class AppComponent {
  title = 'sep6-app';
  subtitle = 'MySubtitle';  
}
