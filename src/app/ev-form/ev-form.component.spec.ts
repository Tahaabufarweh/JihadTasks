import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvFormComponent } from './ev-form.component';

describe('EvFormComponent', () => {
  let component: EvFormComponent;
  let fixture: ComponentFixture<EvFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
