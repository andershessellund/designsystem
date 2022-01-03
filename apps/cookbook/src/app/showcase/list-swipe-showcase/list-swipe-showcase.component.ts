import { Component } from '@angular/core';

@Component({
  selector: 'cookbook-list-swipe-showcase',
  templateUrl: './list-swipe-showcase.component.html',
  styleUrls: ['./list-swipe-showcase.component.scss'],
})
export class ListSwipeShowcaseComponent {
  exampleHtml: string =
    require('!raw-loader!../../examples/list-swipe-example/list-swipe-example.component.html')
      .default;
}
