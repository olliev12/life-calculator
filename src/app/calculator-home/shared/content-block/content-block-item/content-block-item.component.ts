import { Component, Input } from '@angular/core';
import { ContentBlockItem, ContentBlockItemType } from '../content-block.component';

@Component({
  selector: 'app-content-block-item',
  templateUrl: './content-block-item.component.html',
  styleUrls: ['./content-block-item.component.scss']
})
export class ContentBlockItemComponent {

  @Input() item!: ContentBlockItem;
  ContentBlockItemType = ContentBlockItemType;

  ngOnInit() {
    this.item.children?.sort((a, b) => a.order - b.order);
  }

  sortAllChildren(items: ContentBlockItem[]) {
    for (let x of items) {
      if (x.children) {
        this.sortAllChildren(x.children);
      }
      else {

      }
    }
  }

  sortOrder(items: ContentBlockItem[] | undefined) {
    return items?.sort((a, b) => a.order - b.order);
  }

}
