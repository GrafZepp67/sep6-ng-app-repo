import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service/auth.service';

@Component({
  selector: 'app-section-login',
  templateUrl: './section-login.component.html',
  styleUrls: ['./section-login.component.css']
})
export class SectionLoginComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}
