import { Component, Input } from '@angular/core';

// export enum ContentBlockItemType {
//   paragraph = 'paragraph',
//   image = 'image',
//   table = 'table',
//   unorderedList = 'unorderedList',
//   orderedList = 'orderedList'
// }

export enum ContentBlockItemType {
  Paragraph = 'paragraph',
  UnorderedList = 'unordered-list',
  OrderedList = 'ordered-list',
  Table = 'table',
  Image = 'image',
  TableCell = "TableCell",
  TableRow = "TableRow"
}

export interface ContentBlockItem {
  content: string;
  order: number;
  type: ContentBlockItemType;
  children?: ContentBlockItem[]
}

@Component({
  selector: 'app-content-block',
  templateUrl: './content-block.component.html',
  styleUrls: ['./content-block.component.scss']
})
export class ContentBlockComponent {
  // TODO lists and tables need to be implemented only as ContentBlockItem[]
  // ContentBlockItem should be updated to have child content blocks
  @Input() heading!: string;
  @Input() paragraphs!: ContentBlockItem[];
  @Input() lists!: ContentBlockItem[];
  // table structure would be
  /*
    {
      content: string;
      order: number;
      type: table;
      children?: [
        {
          content: row;
          order: number;
          type: table;
          children?: [
            {
              content: cell;
              order: number;
              type: ContentBlockItemType;
              children?: ContentBlockItem[]
            },
            {
              content: cell;
              order: number;
              type: ContentBlockItemType;
              children?: ContentBlockItem[]
            },
          ]
        }
      ]
    }
  */
  @Input() tables!: ContentBlockItem[];
  @Input() images!: ContentBlockItem[];
  allInputs!: ContentBlockItem[];
  table: ContentBlockItem = {
    content: '',
    order: 4,
    type: ContentBlockItemType.Table,
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
  }


  //traverse all inputs and determine the overall order
  ngOnInit() {
    this.allInputs = (this.paragraphs.concat(this.lists).concat(this.tables).concat(this.images)).sort((a, b) => a.order - b.order);
  }
}
