import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostedlogComponent } from './postedlog.component';

describe('PostedlogComponent', () => {
  let component: PostedlogComponent;
  let fixture: ComponentFixture<PostedlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostedlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostedlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
