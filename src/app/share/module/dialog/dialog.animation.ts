import {animate, state, style, transition, trigger} from '@angular/animations';

export enum DialogAnimationState {
  DEFAULT_VOID = 'void',
  DEFAULT_ENTER = 'defaultEnter',
  DEFAULT_EXIT = 'defaultExit'
}

export const DialogAnimation = [
  trigger('slideDialog', [
    state(DialogAnimationState.DEFAULT_VOID, style({ transform: 'translate3d(0, 25%, 0) scale(0.9)', opacity: 0 })),
    state(DialogAnimationState.DEFAULT_ENTER, style({ transform: 'none', opacity: 1 })),
    state(DialogAnimationState.DEFAULT_EXIT, style({ transform: 'translate3d(0, 25%, 0)', opacity: 0 })),
    transition('* => *', animate('800ms cubic-bezier(0.25, 0.8, 0.25, 1)')),
  ])
];
