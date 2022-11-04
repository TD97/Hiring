import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplogComponent } from './emplog.component';

describe('EmplogComponent', () => {
  let component: EmplogComponent;
  let fixture: ComponentFixture<EmplogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmplogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
