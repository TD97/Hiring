import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefcheckComponent } from './refcheck.component';

describe('RefcheckComponent', () => {
  let component: RefcheckComponent;
  let fixture: ComponentFixture<RefcheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefcheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
