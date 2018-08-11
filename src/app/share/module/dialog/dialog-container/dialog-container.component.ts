import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DialogConfig } from '../dialogConfig';
import { DialogContainer } from '../dialogContainer';

@Component({
  selector: 'app-dialog-container',
  templateUrl: './dialog-container.component.html',
  styleUrls: ['./dialog-container.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
  animations: [
    trigger('slideDialog', [
      state('void', style({ transform: 'translate3d(0, 25%, 0) scale(0.9)', opacity: 0 })),
      state('enter', style({ transform: 'none', opacity: 1 })),
      state('exit', style({ transform: 'translate3d(0, 25%, 0)', opacity: 0 })),
      transition('* => *', animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)')),
    ])
  ],
  host: {
    'class': 'dialog-container',
    '[@slideDialog]': 'animationState',
  }
})
export class DialogContainerComponent extends DialogContainer {
  constructor(public config: DialogConfig) {
    super(config);
  }
}
