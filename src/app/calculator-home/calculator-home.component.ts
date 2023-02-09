import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as AppConfig  from '../config/app-config';
import { AppGlobal } from '../services/app-global';

@Component({
  selector: 'app-calculator-home',
  templateUrl: './calculator-home.component.html',
  styleUrls: ['./calculator-home.component.scss']
})
export class CalculatorHomeComponent {
  readonly types: AppConfig.CalculatorType[] = AppConfig.calculators;
  selectedTypes: AppConfig.CalculatorType[] = AppConfig.calculators;

  constructor(
    public appGlobal: AppGlobal,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
      this.route.params.subscribe((params) => {
        if (params['type']) {
          let mode = this.types.find((type) => type.route === params['type']);
          if (params['type'] === 'all') {
            this.selectedTypes = AppConfig.calculators;
          }
          else if (mode) {
            this.setMode(mode);
          }
          else {
            this.router.navigate([`calculators/all`]);
          }
        }
        else {
          this.router.navigate([`calculators/all`]);
        }
      });
  }

  setMode(type: AppConfig.CalculatorType) {
    this.selectedTypes = [type];
  }

  selectMode(mode: AppConfig.CalculatorType) {
    this.setMode(mode);
    // this.router.navigate([`password/${this.selectedType.route}`]);
  }

}

