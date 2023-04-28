import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as AppConfig  from 'src/app/config/app-config';
import { AppGlobal } from 'src/app/services/app-global';

export interface Activity {
  name: string,
  multiply: number
}

@Component({
  selector: 'app-calorie-calculator',
  templateUrl: './calorie-calculator.component.html',
  styleUrls: ['./calorie-calculator.component.scss']
})
export class CalorieCalculatorComponent {

  @Input() selectedType!: AppConfig.CalculatorType;
  @Input() selectedChild!: AppConfig.Calculator;
  formConfig: AppConfig.FormConfig = AppConfig.calorieConfig;
  // activities: Activity[] = [
  //   {name: 'Little to no exercise', multiply: 1.2},
  //   {name: 'Light exercise (1-3 days per week)', multiply: 1.375},
  //   {name: 'Moderate exercise (3-5 days per week)', multiply: 1.55},
  //   {name: 'Heavy exercise (6-7 days per week)', multiply: 1.725},
  //   {name: 'Very heavy exercise (twice per day, extra heavy workouts)', multiply: 1.9}
  // ];
  // goals: Goal[] = [
  //   {name: 'Lose weight - 1lb per week', alt: 'tone', cals: 500},
  //   {name: 'Lose weight - 2lb per week', alt: 'tone', cals: 1000},
  //   {name: 'Gain weight - 1lb per week', alt: 'bulk', cals: -500},
  //   {name: 'Gain weight - 2lb per week', alt: 'bulk',cals: -1000},
  //   {name: 'Maintain weight', alt: 'tone', cals: 0}
  // ];
  // weight: string = '';
  // height: string = '';
  // age: string = '';
  // gender: string = '';
  // selectedActivity: Activity = {
  //   name: '',
  //   multiply: 0
  // };
  // selectedGoal: Goal = {
  //   name: '',
  //   alt: '',
  //   cals: 0
  // };

  // age: number;
  // sex: string;
  // weight: number;
  // height: number;
  // activity: string;
  // goal: string;
  // calories: number;

  // calculateCalories() {
  //   let bmr;
  //   if (this.sex === "M") {
  //     bmr = 66 + (6.3 * this.weight) + (12.9 * this.height) - (6.8 * this.age);
  //   } else {
  //     bmr = 655 + (4.3 * this.weight) + (4.7 * this.height) - (4.7 * this.age);
  //   }

  //   switch (this.activity) {
  //     case "Sedentary":
  //       this.calories = bmr * 1.2;
  //       break;
  //     case "Lightly Active":
  //       this.calories = bmr * 1.375;
  //       break;
  //     case "Moderately Active":
  //       this.calories = bmr * 1.55;
  //       break;
  //     case "Very Active":
  //       this.cal

  //   }
  // }
  constructor() {

  }

  calculateCalories(some: any) {
    console.log(some)
  }

  // bmr(): number {
  //   let standard:number = (parseInt(this.weight, 10) * 10) +
  //         (parseInt(this.height) * 6.25) -
  //         (parseInt(this.age) * 5); //both genders only differ on the last addition or subtraction

  //     if(this.gender === 'male'){
  //       standard += 5
  //     } else if (this.gender === 'female'){
  //       standard -= 161
  //     } else {
  //       // return //break out and angular number validation will take care of NaN
  //     }
  //     return standard;
  //   };
  // //function to get total dailys cals
  // cals(): number {
  //   let calories: number = 0;
  //   if(Number(this.bmr()) && this.selectedActivity != null && this.selectedGoal != null){
  //     calories = this.bmr() * Number(this.selectedActivity.multiply) - Number(this.selectedGoal.cals)
  //   }
  //   return calories;
  // };
  // //of daily cals how much should be protein
  // proteinCals(){
  //  return  this.cals() * .55
  // };
  // //as above for carbs
  // carbsCals(){
  //   return this.cals() * .25
  // };
  // //as above for fat
  // fatCals(){
  //   return this.cals() * .2
  // };

}
