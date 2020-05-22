import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDummyComponent } from './section-dummy.component';

describe('SectionDummyComponent', () => {
  let component: SectionDummyComponent;
  let fixture: ComponentFixture<SectionDummyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionDummyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionDummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
