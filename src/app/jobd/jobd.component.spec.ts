import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobdComponent } from './jobd.component';

describe('JobdComponent', () => {
  let component: JobdComponent;
  let fixture: ComponentFixture<JobdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
