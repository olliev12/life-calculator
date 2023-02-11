import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as AppConfig  from 'src/app/config/app-config';
import { AppGlobal } from 'src/app/services/app-global';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  readonly types: AppConfig.CalculatorType[] = AppConfig.calculators;
  @Input() selectedTypes: AppConfig.CalculatorType[] = AppConfig.calculators;
  @Input() selectedChild: AppConfig.Calculator = this.selectedTypes[0]?.children[0];

  constructor(
    public appGlobal: AppGlobal,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {

  }

}
