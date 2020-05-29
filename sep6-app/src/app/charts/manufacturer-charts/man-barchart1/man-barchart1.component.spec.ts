import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManBarchart1Component } from './man-barchart1.component';

describe('ManBarchart1Component', () => {
  let component: ManBarchart1Component;
  let fixture: ComponentFixture<ManBarchart1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManBarchart1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManBarchart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
