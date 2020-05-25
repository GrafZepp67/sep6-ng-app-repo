import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyTabgroupComponent } from './dummy-tabgroup.component';

describe('DummyTabgroupComponent', () => {
  let component: DummyTabgroupComponent;
  let fixture: ComponentFixture<DummyTabgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummyTabgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyTabgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
