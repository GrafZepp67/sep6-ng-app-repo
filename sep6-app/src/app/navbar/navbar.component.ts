import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from '../services/auth-service/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public user: any;

  constructor(public authService: AuthService) { }

  ngOnInit(): void 
  {
    this.user = this.authService.getUser();
  }

}
