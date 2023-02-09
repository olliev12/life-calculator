import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorHomeRoutingModule } from './calculator-home-routing.module';
import { CalculatorHomeComponent } from './calculator-home.component';


@NgModule({
  declarations: [
    CalculatorHomeComponent
  ],
  imports: [
    CommonModule,
    CalculatorHomeRoutingModule
  ]
})
export class CalculatorHomeModule { }
