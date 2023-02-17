import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardCalculatorComponent } from './standard-calculator.component';

describe('StandardCalculatorComponent', () => {
  let component: StandardCalculatorComponent;
  let fixture: ComponentFixture<StandardCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandardCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandardCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
