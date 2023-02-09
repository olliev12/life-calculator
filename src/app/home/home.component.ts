import { Component } from '@angular/core';
import { AppGlobal } from '../services/app-global';
import * as AppConfig from './../config/app-config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  readonly categories: AppConfig.CalculatorType[] = AppConfig.calculators;

  constructor(public appGlobal: AppGlobal) {

  }

  public typeRoute(calc: AppConfig.CalculatorType, child?: AppConfig.Calculator): string {
    return this.appGlobal.calculatorTypeRoute(calc, child);
  }
}
