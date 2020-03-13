import { forwardRef, Component, Input, Output, EventEmitter } from '@angular/core';

import { ReorderListComponent } from '@kirbydesign/designsystem';

// #region AUTO-GENERATED - PLEASE DON'T EDIT CONTENT WITHIN!
@Component({
  selector: 'kirby-reorder-list',
  template: '<ng-content></ng-content>',
  providers: [
    {
      provide: ReorderListComponent,
      useExisting: forwardRef(() => MockReorderListComponent),
    },
  ],
})
export class MockReorderListComponent {
  @Input() items: any[];
  @Input() subItemsName: string;
  @Input() getItemTextDefault: (item: any) => string;
  @Output() itemReorder = new EventEmitter<any>();
  @Output() subItemReorder = new EventEmitter<any>();
}

// #endregion