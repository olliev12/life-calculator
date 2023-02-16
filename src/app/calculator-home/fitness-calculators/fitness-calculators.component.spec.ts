import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessCalculatorsComponent } from './fitness-calculators.component';

describe('FitnessCalculatorsComponent', () => {
  let component: FitnessCalculatorsComponent;
  let fixture: ComponentFixture<FitnessCalculatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitnessCalculatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitnessCalculatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
