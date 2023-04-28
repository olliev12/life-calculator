import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBlockItemComponent } from './content-block-item.component';

describe('ContentBlockItemComponent', () => {
  let component: ContentBlockItemComponent;
  let fixture: ComponentFixture<ContentBlockItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentBlockItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentBlockItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
