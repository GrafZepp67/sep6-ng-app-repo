import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionManufacturersComponent } from './section-manufacturers.component';

describe('SectionManufacturersComponent', () => {
  let component: SectionManufacturersComponent;
  let fixture: ComponentFixture<SectionManufacturersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionManufacturersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionManufacturersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
