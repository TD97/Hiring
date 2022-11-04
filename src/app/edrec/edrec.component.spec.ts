import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdrecComponent } from './edrec.component';

describe('EdrecComponent', () => {
  let component: EdrecComponent;
  let fixture: ComponentFixture<EdrecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdrecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdrecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
