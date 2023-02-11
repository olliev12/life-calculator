import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorHomeRoutingModule } from './calculator-home-routing.module';
import { CalculatorHomeComponent } from './calculator-home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorOverviewComponent } from './calculator-overview/calculator-overview.component';


@NgModule({
  declarations: [
    CalculatorHomeComponent,
    CalculatorComponent,
    CalculatorOverviewComponent
  ],
  imports: [
    CommonModule,
    CalculatorHomeRoutingModule
  ]
})
export class CalculatorHomeModule { }
