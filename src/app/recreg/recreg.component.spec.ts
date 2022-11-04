import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecregComponent } from './recreg.component';

describe('RecregComponent', () => {
  let component: RecregComponent;
  let fixture: ComponentFixture<RecregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecregComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
