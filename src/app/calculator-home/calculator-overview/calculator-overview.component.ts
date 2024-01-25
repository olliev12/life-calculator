import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as AppConfig  from 'src/app/config/app-config';
import { AppGlobal } from 'src/app/services/app-global';

@Component({
  selector: 'app-calculator-overview',
  templateUrl: './calculator-overview.component.html',
  styleUrls: ['./calculator-overview.component.scss']
})
export class CalculatorOverviewComponent {
  readonly types: AppConfig.CalculatorType[] = AppConfig.calculators;
  @Input() selectedTypes: AppConfig.CalculatorType[] = AppConfig.calculators;
  @Input() isAllCalculators = true;

  constructor(
    public appGlobal: AppGlobal,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  // ngOnInit(): void {

  // }

  public calculatorHeading(): string {
    return this.isAllCalculators ? 'All Our Calculators' : `${this.selectedTypes[0].label} Calculators`;
  }
}
