import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathCalculatorsComponent } from './math-calculators.component';

describe('MathCalculatorsComponent', () => {
  let component: MathCalculatorsComponent;
  let fixture: ComponentFixture<MathCalculatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathCalculatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MathCalculatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
