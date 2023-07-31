import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingBtnComponent } from './sliding-btn.component';

describe('SlidingBtnComponent', () => {
  let component: SlidingBtnComponent;
  let fixture: ComponentFixture<SlidingBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidingBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidingBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
