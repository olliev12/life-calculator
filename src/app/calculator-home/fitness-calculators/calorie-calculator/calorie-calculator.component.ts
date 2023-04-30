import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as AppConfig  from 'src/app/config/app-config';
import { AppGlobal } from 'src/app/services/app-global';
import { ContentBlockItem, ContentBlockItemConfig, ContentBlockItemType } from '../../shared/content-block/content-block.component';

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
  para1: ContentBlockItem = {
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
    an unknown printer took a galley of type and scrambled it to make a type specimen book.
    It has survived not only five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged. It was popularised in the 1960s with the release of
    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
    software like Aldus PageMaker including versions of Lorem Ipsum.
    `,
    order: 0,
    type: ContentBlockItemType.Paragraph,
    heading: 'Sub Heading'
  }

  cPara: ContentBlockItem = {
    content: '2 + 2 = 4',
    order: 1,
    type: ContentBlockItemType.CenterParagraph
  }

  styledPara: ContentBlockItem = {
    content: '',
    order: 2,
    type: ContentBlockItemType.Paragraph,
    children: [
      {
        content: 'Some thing something some things ar some thing',
        order: 0,
        type: ContentBlockItemType.Text
      },
      {
        content: 'this should be link text',
        order: 1,
        type: ContentBlockItemType.Link,
        linkAddress: 'https://www.google.com'
      },
      {
        content: 'Some thing something some things ar some thing',
        order: 2,
        type: ContentBlockItemType.Text
      },
      {
        content: 'Some thing something some things ar some thing',
        order: 3,
        type: ContentBlockItemType.Text,
        styles: ['bold']
      },
    ]
  }

  table: ContentBlockItem = {
    content: '',
    order: 5,
    type: ContentBlockItemType.Table,
    children: [
      {
        content: '',
        order: 0,
        type: ContentBlockItemType.TableHeader,
        children: [
          {
            content: 'Header 1',
            order: 1,
            type: ContentBlockItemType.Paragraph
          },
          {
            content: 'Header 2',
            order: 2,
            type: ContentBlockItemType.Paragraph
          },
          {
            content: 'Header 3',
            order: 3,
            type: ContentBlockItemType.Paragraph
          }
        ]
      },
      {
        content: '',
        order: 2,
        type: ContentBlockItemType.TableRow,
        children: [
          {
            content: 'Cell 1,1',
            order: 1,
            type: ContentBlockItemType.TableCell
          }
        ]
      },
      {
        content: '',
        order: 4,
        type: ContentBlockItemType.TableRow,
        children: [
          {
            content: 'Cell 1,1',
            order: 1,
            type: ContentBlockItemType.TableCell
          },
          {
            content: 'Cell 1,2',
            order: 2,
            type: ContentBlockItemType.TableCell
          },
          {
            content: 'Cell 1,3',
            order: 3,
            type: ContentBlockItemType.TableCell
          }
        ]
      },
      {
        content: '',
        order: 5,
        type: ContentBlockItemType.TableRow,
        children: [
          {
            content: 'Cell 2,1',
            order: 1,
            type: ContentBlockItemType.TableCell
          },
          {
            content: 'Cell 2,2',
            order: 2,
            type: ContentBlockItemType.TableCell
          },
          {
            content: 'Cell 2,3',
            order: 3,
            type: ContentBlockItemType.TableCell
          }
        ]
      }
    ]
  };

  list: ContentBlockItem = {
    content: '',
    order: 3,
    type: ContentBlockItemType.UnorderedList,
    children: [
      {
        content: 'List item 1',
        order: 1,
        type: ContentBlockItemType.Paragraph
      },
      {
        content: 'List item 2',
        order: 2,
        type: ContentBlockItemType.Paragraph
      },
      {
        content: 'List item 3',
        order: 3,
        type: ContentBlockItemType.Paragraph
      }
    ]
  }

  list2: ContentBlockItem = {
    content: '',
    order: 4,
    type: ContentBlockItemType.OrderedList,
    heading: 'Sub heading again',
    children: [
      {
        content: 'List item 1',
        heading: 'Heading 1',
        order: 1,
        type: ContentBlockItemType.ListItem
      },
      {
        content: 'List item 2',
        heading: 'Heading 1',
        order: 2,
        type: ContentBlockItemType.ListItem
      },
      {
        content: 'List item 3',
        heading: 'Heading 1',
        order: 3,
        type: ContentBlockItemType.ListItem
      }
    ]
  }

  header: string = 'Sample Heading'
  items: ContentBlockItem[] = [this.para1, this.styledPara, this.table, this.list, this.list2]
  itemConfig: ContentBlockItemConfig = {
    header: this.header,
    items: this.items
  }
  itemConfigArr: ContentBlockItemConfig[] = [this.itemConfig];
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
