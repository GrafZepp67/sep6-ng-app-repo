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

  public navOptions: string[] = ['1. Flights', '2. Weather', '3. Manufacturers'];

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
}