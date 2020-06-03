import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service/auth.service';

@Component({
  selector: 'app-section-welcome',
  templateUrl: './section-welcome.component.html',
  styleUrls: ['./section-welcome.component.css']
})
export class SectionWelcomeComponent implements OnInit {

  public user: any;

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.user = this.authService.getUser();    
  }

}
