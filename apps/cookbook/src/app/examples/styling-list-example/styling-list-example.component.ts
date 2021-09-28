import { Component } from '@angular/core';

const config = {
  template: `<div class="menu-items-container">
  <ul class="menu-items">
    <li>
      <a
        class="menu-item">"Menu Item 1"</a
      >
    </li>`,
  styles: [
    `li::before { 
  display: none; 
}

li { 
  margin-block-start: revert; 
}`,
  ],
};

@Component({
  selector: 'cookbook-styling-list-example',
  template: config.template,
  styles: config.styles,
})
export class StylingListExampleComponent {
  template: string = config.template;
  styles: string = config.styles.join(`
`);
}