import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturersTabgroupComponent } from './manufacturers-tabgroup.component';

describe('ManufacturersTabgroupComponent', () => {
  let component: ManufacturersTabgroupComponent;
  let fixture: ComponentFixture<ManufacturersTabgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturersTabgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturersTabgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
