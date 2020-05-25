import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartstackedComponent } from './bar-chartstacked.component';

describe('BarChartstackedComponent', () => {
  let component: BarChartstackedComponent;
  let fixture: ComponentFixture<BarChartstackedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarChartstackedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartstackedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
