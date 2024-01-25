import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as AppConfig  from 'src/app/config/app-config';
// import { AppGlobal } from 'src/app/services/app-global';

@Component({
  selector: 'app-fitness-calculators',
  templateUrl: './fitness-calculators.component.html',
  styleUrls: ['./fitness-calculators.component.scss']
})
export class FitnessCalculatorsComponent implements OnInit {

  @Input() selectedType!: AppConfig.CalculatorType;
  @Input() selectedChild!: AppConfig.Calculator;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.selectedChild = this.selectedType?.children.find((child) => child.route === params['child']) || this.selectedChild;
      // if (!this.selectedType?.children.includes(this.selectedChild)) {
      //   console.log(this.route.parent)
      //   this.router.navigate(['fitness-calculators'])
      // }
    })
  }

  chilldIs(childName: string): boolean {
    return this.selectedChild.name === childName;
  }

}
