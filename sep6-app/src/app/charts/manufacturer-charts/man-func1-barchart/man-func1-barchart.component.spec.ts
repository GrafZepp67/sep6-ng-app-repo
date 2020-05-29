import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManFunc1BarchartComponent } from './man-func1-barchart.component';

describe('ManFunc1BarchartComponent', () => {
  let component: ManFunc1BarchartComponent;
  let fixture: ComponentFixture<ManFunc1BarchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManFunc1BarchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManFunc1BarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
