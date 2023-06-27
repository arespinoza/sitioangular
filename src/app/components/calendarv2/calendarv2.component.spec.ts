import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calendarv2Component } from './calendarv2.component';

describe('Calendarv2Component', () => {
  let component: Calendarv2Component;
  let fixture: ComponentFixture<Calendarv2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Calendarv2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Calendarv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
