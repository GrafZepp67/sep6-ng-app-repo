import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturersPage3Component } from './manufacturers-page3.component';

describe('ManufacturersPage3Component', () => {
  let component: ManufacturersPage3Component;
  let fixture: ComponentFixture<ManufacturersPage3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturersPage3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturersPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
