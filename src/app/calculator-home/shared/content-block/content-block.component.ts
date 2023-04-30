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
  CenterParagraph = 'center-paragraph',
  Text = 'text',
  Link = 'link',
  UnorderedList = 'unordered-list',
  OrderedList = 'ordered-list',
  ListItem = 'list-item',
  Table = 'table',
  Image = 'image',
  TableCell = "TableCell",
  TableRow = "TableRow",
  TableHeader = 'TableHeader'
}

export interface ContentBlockItem {
  content: string;
  order: number;
  type: ContentBlockItemType;
  children?: ContentBlockItem[];
  heading?: string;
  linkAddress?: string;
  styles?: string[];
}

export interface ContentBlockItemConfig {
  header?: string;
  items: ContentBlockItem[]
}

@Component({
  selector: 'app-content-block',
  templateUrl: './content-block.component.html',
  styleUrls: ['./content-block.component.scss']
})
export class ContentBlockComponent {
  ContentBlockItemType = ContentBlockItemType;
  @Input () itemConfig!: ContentBlockItemConfig;

  //traverse all inputs and determine the overall order
  ngOnInit() {
    // this.items = (this.paragraphs.concat(this.lists).concat(this.tables).concat(this.images)).sort((a, b) => a.order - b.order);
  }

  sortOrder(items: ContentBlockItem[] | undefined) {
    return items?.sort((a, b) => a.order - b.order);
  }

  createConfigFromChildren(items: ContentBlockItem[]): ContentBlockItemConfig {
    return {
      header: '',
      items: items
    }
  }

  multipleClassString(styles: string[] | undefined): string {
    console.log(styles)
    return styles? styles.join(' ') : '';
  }
}
