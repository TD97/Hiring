import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsappComponent } from './jobsapp.component';

describe('JobsappComponent', () => {
  let component: JobsappComponent;
  let fixture: ComponentFixture<JobsappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobsappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
