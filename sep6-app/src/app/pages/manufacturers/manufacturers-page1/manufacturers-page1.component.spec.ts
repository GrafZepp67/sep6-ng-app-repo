import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturersPage1Component } from './manufacturers-page1.component';

describe('ManufacturersPage1Component', () => {
  let component: ManufacturersPage1Component;
  let fixture: ComponentFixture<ManufacturersPage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturersPage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturersPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
