import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvForm2Component } from './ev-form2.component';

describe('EvForm2Component', () => {
  let component: EvForm2Component;
  let fixture: ComponentFixture<EvForm2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvForm2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
