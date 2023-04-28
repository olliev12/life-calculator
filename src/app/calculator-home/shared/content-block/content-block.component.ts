import { Component, Input } from '@angular/core';

export enum ContentBlockItemType {
  paragraph = 'paragraph',
  image = 'image',
  table = 'table',
  unorderedList = 'unorderedList',
  orderedList = 'orderedList'
}

export interface ContentBlockItem {
  content: string;
  order: number;
  type: ContentBlockItemType;
}

@Component({
  selector: 'app-content-block',
  templateUrl: './content-block.component.html',
  styleUrls: ['./content-block.component.css']
})
export class ContentBlockComponent {
  // TODO lists and tables need to be implemented only as ContentBlockItem[]
  // ContentBlockItem should be updated to have child content blocks
  @Input() heading: string;
  @Input() paragraphs: ContentBlockItem[];
  @Input() lists: ContentBlockItem[][];
  @Input() tables: ContentBlockItem[][];
  @Input() images: ContentBlockItem[];
  allInputs: ContentBlockItem[];

  //traverse all inputs and determine the overall order
}
