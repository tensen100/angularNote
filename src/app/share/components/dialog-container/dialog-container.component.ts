import {
  Component,
  ComponentRef,
  EventEmitter,
  ViewChild,
  EmbeddedViewRef,
  OnInit,
  ElementRef,
  ComponentFactoryResolver, ApplicationRef, Injector, ViewEncapsulation, ChangeDetectionStrategy
} from '@angular/core';
import { animate, state, style, transition, trigger, AnimationEvent } from '@angular/animations';
import {
  BasePortalOutlet,
  ComponentPortal,
  CdkPortalOutlet,
  TemplatePortal,
} from '@angular/cdk/portal';


// ESC键码
const ESCAPE = 27;

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
      state('leave', style({ transform: 'translate3d(0, 25%, 0)', opacity: 0 })),
      transition('* => *', animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)')),
    ])
  ],
  host: {
    'class': 'dialog-container',
    '[@slideDialog]': 'animationState',
    '(@slideDialog.start)': 'onAnimationStart($event)',
    '(@slideDialog.done)': 'onAnimationDone($event)',
  }
})
export class DialogContainerComponent extends BasePortalOutlet {
  @ViewChild(CdkPortalOutlet) portalOutlet: CdkPortalOutlet;
  animationState: 'void' | 'enter' | 'leave' = 'enter';
  animationStateChanged = new EventEmitter<AnimationEvent>();
  // @HostListener('document:keydown', ['$event'])
  // private handleKeydown(event: KeyboardEvent) {
  //   if (event.keyCode === ESCAPE ) {
  //     this.dialogRef.close();
  //   }
  // }
  onAnimationStart(event) {
    console.log('start')
    this.animationStateChanged.emit(event);
  }
  onAnimationDone(event) {
    console.log('done')
    this.animationStateChanged.emit(event);
  }
  startExitAnimation() {
    this.animationState = 'leave';
  }

  attachComponentPortal<T>(portal: ComponentPortal<T>): ComponentRef<T> {
    // if (this._portalOutlet.hasAttached()) {
    //   throwMatDialogContentAlreadyAttachedError();
    // }

    // this._savePreviouslyFocusedElement();
    console.log(this.portalOutlet); // undefined
    return this.portalOutlet.attachComponentPortal(portal);
  }

  attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C> {
    // if (this._portalOutlet.hasAttached()) {
    //   throwMatDialogContentAlreadyAttachedError();
    // }

    // this._savePreviouslyFocusedElement();
    return this.portalOutlet.attachTemplatePortal(portal);
  }

}
