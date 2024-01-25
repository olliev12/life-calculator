import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as AppConfig  from '../config/app-config';
import { AppGlobal } from '../services/app-global';

export enum Modes {
  overview = 'overview',
  calculator = 'calculator'
}

@Component({
  selector: 'app-calculator-home',
  templateUrl: './calculator-home.component.html',
  styleUrls: ['./calculator-home.component.scss']
})
export class CalculatorHomeComponent implements OnInit {
  readonly types: AppConfig.CalculatorType[] = AppConfig.calculators;
  readonly Modes = Modes;
  selectedTypes: AppConfig.CalculatorType[] = AppConfig.calculators;
  selectedChild: AppConfig.Calculator = this.selectedTypes[0]?.children[0];
  mode: Modes = Modes.overview;

  constructor(
    public appGlobal: AppGlobal,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const calcType = this.types.find((type) => type.route === params['type']);
      const childType = calcType?.children.find((child) => child.route === params['child']);
      if (calcType) {
        this.setType([calcType]);
        this.setMode(Modes.overview);
        if (childType) {
          this.setCalculator(childType);
          this.setMode(Modes.calculator);
        }
      }
      else if (params['type'] === 'all') {
        this.setType(AppConfig.calculators);
        this.setMode(Modes.overview);
      }
      else {
        this.router.navigate([`calculators/all`]);
      }
    });
  }

  setMode(mode: Modes) {
    this.mode = mode;
  }

  modeIs(mode: Modes): boolean {
    return this.mode === mode;
  }

  setType(type: AppConfig.CalculatorType[]) {
    this.selectedTypes = type;
  }

  setCalculator(calc: AppConfig.Calculator) {
    this.selectedChild = calc;
  }

  public typeRoute(): string {
    let route = '';
    if (this.isAllCalculators()) {
      route = '/calculators/all';
    }
    else {
      return this.appGlobal.calculatorTypeRoute(this.selectedTypes[0]);
    }
    return route;
  }

  public isAllCalculators(): boolean {
    return this.selectedTypes === AppConfig.calculators;
  }

}

