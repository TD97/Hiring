import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interview1Component } from './interview1.component';

describe('Interview1Component', () => {
  let component: Interview1Component;
  let fixture: ComponentFixture<Interview1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Interview1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Interview1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
