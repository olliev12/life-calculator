import { Component, Input } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
import * as AppConfig  from 'src/app/config/app-config';
// import { AppGlobal } from 'src/app/services/app-global';
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

  styledPara: ContentBlockItem = {
    content: '',
    order: 2,
    type: ContentBlockItemType.Paragraph,
    styles: ['center'],
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
        styles: ['bold', 'upper']
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

  header = 'Sample Heading'
  items: ContentBlockItem[] = [this.para1, this.styledPara, this.table, this.list, this.list2]
  itemConfig: ContentBlockItemConfig = {
    header: this.header,
    items: this.items
  }
  itemConfigArr: ContentBlockItemConfig[] = [this.itemConfig];
  // constructor() {

  // }

  calculateCalories(some: any) {
    console.log(some)
  }

}
