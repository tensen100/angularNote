import { ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import { animate, state, style, transition, trigger} from '@angular/animations';
import { DialogConfig } from '../dialogConfig';
import { DialogContainer } from '../dialogContainer';

@Component({
  selector: 'app-dialog-right-container',
  templateUrl: './dialog-right-container.component.html',
  styleUrls: ['./dialog-right-container.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
  animations: [
    trigger('slideDialog', [
      state('void', style({ transform: 'translate3d(100%, 0, 0) scale(0.9)', opacity: 0 })),
      state('enter', style({ transform: 'none', opacity: 1 })),
      state('exit', style({ transform: 'translate3d(100%, 0, 0)', opacity: 0 })),
      transition('* => *', animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)')),
    ])
  ],
  host: {
    'class': 'dialog-container',
    '[@slideDialog]': 'animationState',
  }
})
export class DialogRightContainerComponent extends DialogContainer  {
  constructor(public config: DialogConfig) {
    super(config);
  }

}
