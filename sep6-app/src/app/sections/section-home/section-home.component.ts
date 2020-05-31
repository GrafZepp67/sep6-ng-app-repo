import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service/auth.service';

@Component({
  selector: 'app-section-home',
  templateUrl: './section-home.component.html',
  styleUrls: ['./section-home.component.css']
})
export class SectionHomeComponent implements OnInit {

  public user: any;

  constructor(public authService: AuthService) { }

  ngOnInit(): void 
  {
    this.user = this.authService.getUser();
  }
}
