import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcvComponent } from './bcv.component';

describe('BcvComponent', () => {
  let component: BcvComponent;
  let fixture: ComponentFixture<BcvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BcvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BcvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
