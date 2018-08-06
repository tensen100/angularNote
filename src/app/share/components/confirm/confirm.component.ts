import {Component, EventEmitter, Host, HostListener, Inject} from '@angular/core';
import {DIALOG_DATA} from '../../../service/service/dialog/dialogConfig';
import {DialogOverlayRef} from '../../../service/service/dialog/dialogOveryRef';
import {animate, state, style, transition, trigger} from '@angular/animations';

// ESC键码
const ESCAPE = 27;

const ANIMATION_TIMINGS = '400ms cubic-bezier(0.25, 0.8, 0.25, 1)';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.less'],
  /*animations: [
    trigger('fade', [
      state('fadeOut', style({ opacity: 0 })),
      state('fadeIn', style({ opacity: 1 })),
      transition('* => fadeIn', animate(ANIMATION_TIMINGS))
    ]),
    trigger('slideContent', [
      state('void', style({ transform: 'translate3d(0, 25%, 0) scale(0.9)', opacity: 0 })),
      state('enter', style({ transform: 'none', opacity: 1 })),
      state('leave', style({ transform: 'translate3d(0, 25%, 0)', opacity: 0 })),
      transition('* => *', animate(ANIMATION_TIMINGS)),
    ])
  ]*/
})
export class ConfirmComponent {
  loading = true;
  animationState: 'void' | 'enter' | 'leave' = 'enter';
  animationChanged = new EventEmitter<AnimationEvent>();
  // @HostListener('document:keydown', ['$event'])
  /*private handleKeydown(event: KeyboardEvent) {
    if (event.keyCode === ESCAPE ) {
      this.dialogRef.close();
    }
  }*/
  constructor(
    public dialogRef: DialogOverlayRef<ConfirmComponent>,
    @Inject(DIALOG_DATA) public data: any
  ) {
    console.log(data);
  }
  onLoad() {
    this.loading = false;
  }
  // onAnimationStart(event) {
  //   this.animationChanged.emit(event);
  // }
  // onAnimationDone(event) {
  //   this.animationChanged.emit(event);
  // }
  // startExitAnimation() {
  //   this.animationState = 'leave';
  // }
}
