import {
  Component,
  ComponentRef,
  EventEmitter,
  ViewChild,
  EmbeddedViewRef,
  OnInit,
  ElementRef,
  ComponentFactoryResolver, ApplicationRef, Injector, ViewEncapsulation, ChangeDetectionStrategy, HostBinding, HostListener
} from '@angular/core';
import { animate, state, style, transition, trigger, AnimationEvent } from '@angular/animations';
import {
  BasePortalOutlet,
  ComponentPortal,
  CdkPortalOutlet,
  TemplatePortal,
} from '@angular/cdk/portal';
import {DialogConfig} from '../dialogConfig';

export function throwMatDialogContentAlreadyAttachedError() {
  throw Error('Attempting to attach dialog content after content is already attached');
}

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
export class DialogContainerComponent extends BasePortalOutlet {
  animationState: 'void' | 'enter' | 'exit' = 'enter';
  animationStateChanged = new EventEmitter<AnimationEvent>();
  @ViewChild(CdkPortalOutlet) private _portalOutlet: CdkPortalOutlet;
  constructor(public config: DialogConfig) {
    super();
  }

  @HostListener('@slideDialog.start', ['$event'])
  onAnimationStart(event) {
    this.animationStateChanged.emit(event);
  }
  @HostListener('@slideDialog.done', ['$event'])
  onAnimationDone(event) {
    this.animationStateChanged.emit(event);
  }
  startExitAnimation() {
    this.animationState = 'exit';
  }

  attachComponentPortal<T>(portal: ComponentPortal<T>): ComponentRef<T> {
    if (this._portalOutlet.hasAttached()) {
      throwMatDialogContentAlreadyAttachedError();
    }
    return this._portalOutlet.attachComponentPortal(portal);
  }

  attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C> {
    if (this._portalOutlet.hasAttached()) {
      throwMatDialogContentAlreadyAttachedError();
    }
    return this._portalOutlet.attachTemplatePortal(portal);
  }

}
