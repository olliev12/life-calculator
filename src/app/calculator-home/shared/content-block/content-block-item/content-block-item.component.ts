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

}
