import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth-service/auth.service';
import { Subject } from 'rxjs';
import { MatListOption } from '@angular/material/list';

@Component({
  selector: 'app-section-home',
  templateUrl: './section-home.component.html',
  styleUrls: ['./section-home.component.css']
})
export class SectionHomeComponent implements OnInit {

  public user: any;

  constructor(public authService: AuthService) { }

  public activeLink: any;

  public navOptions: string[] = ['Home', '1. Flights', '2. Weather', '3. Manufacturers'];

  public homeOpt: string = 'home';
  public flightsOpt: string = 'flights';
  public weatherOpt: string = 'weather';
  public manufacturersOpt: string = 'manufacturers';

  @ViewChild('navopts') navopts: { selectedLink: any; };

  //Observer area start
  public linkSubject = new Subject<any>();
  public linkSubject$ = this.linkSubject.asObservable();

  public subscription = this.linkSubject$.subscribe((data: any) => 
  {
    this.activeLink = data;
    console.log(this.activeLink);
  });

  public updateTabSubject(newActiveLink: any) 
  {
    this.linkSubject.next(newActiveLink);
  }
  //Observer area end

  ngOnInit(): void 
  {
    this.user = this.authService.getUser();    
  }

  onGroupsChange(options : MatListOption[])
  {
    this.activeLink = options.map(o => o.value)
    this.updateTabSubject(this.activeLink);
  }

  closeMenu() {
    var isMobile = /iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile|Android/i.test(navigator.userAgent);
    if (isMobile) {
      document.getElementById('navButton').click();
   }
}
}