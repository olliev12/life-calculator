import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorHomeRoutingModule } from './calculator-home-routing.module';
import { CalculatorHomeComponent } from './calculator-home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorOverviewComponent } from './calculator-overview/calculator-overview.component';
import { FitnessCalculatorsComponent } from './fitness-calculators/fitness-calculators.component';
import { FinancialCalculatorsComponent } from './financial-calculators/financial-calculators.component';
import { MathCalculatorsComponent } from './math-calculators/math-calculators.component';
import { OtherCalculatorsComponent } from './other-calculators/other-calculators.component';
import { PasswordGeneratorComponent } from './other-calculators/password-generator/password-generator.component';
import { StandardCalculatorComponent } from './math-calculators/standard-calculator/standard-calculator.component';
import { RentCalculatorComponent } from './financial-calculators/rent-calculator/rent-calculator.component';
import { CalorieCalculatorComponent } from './fitness-calculators/calorie-calculator/calorie-calculator.component';
import { CalcComponent } from './shared/calc/calc.component';
import { RadioGroupComponent } from './shared/radio-group/radio-group.component';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CalculatorHomeComponent,
    CalculatorComponent,
    CalculatorOverviewComponent,
    FitnessCalculatorsComponent,
    FinancialCalculatorsComponent,
    MathCalculatorsComponent,
    OtherCalculatorsComponent,
    PasswordGeneratorComponent,
    StandardCalculatorComponent,
    RentCalculatorComponent,
    CalorieCalculatorComponent,
    CalcComponent,
    RadioGroupComponent
  ],
  imports: [
    CommonModule,
    CalculatorHomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class CalculatorHomeModule { }
