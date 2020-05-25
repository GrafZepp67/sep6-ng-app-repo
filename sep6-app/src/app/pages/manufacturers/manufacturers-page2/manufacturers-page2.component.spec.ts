import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturersPage2Component } from './manufacturers-page2.component';

describe('ManufacturersPage2Component', () => {
  let component: ManufacturersPage2Component;
  let fixture: ComponentFixture<ManufacturersPage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturersPage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturersPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
