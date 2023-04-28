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
  @Input() selectedType: AppConfig.CalculatorType = AppConfig.calculators[0];
  @Input() selectedChild: AppConfig.Calculator = this.selectedType?.children[0];

  constructor(
    public appGlobal: AppGlobal,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {

  }

  typeIs(typeName: string): boolean {
    return this.selectedType.name === typeName;
  }

}
