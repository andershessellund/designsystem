import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';

import { ToggleComponent } from '@kirbydesign/designsystem/toggle';

// #region AUTO-GENERATED - PLEASE DON'T EDIT CONTENT WITHIN!
@Component({
  selector: 'kirby-toggle',
  template: '<ng-content></ng-content>',
  providers: [
    {
      provide: ToggleComponent,
      useExisting: forwardRef(() => MockToggleComponent),
    },
  ],
})
export class MockToggleComponent {
  @Input() checked: boolean;
  @Input() disabled: boolean;
  @Output() checkedChange = new EventEmitter<boolean>();
}

// #endregion
