import { BasePortalOutlet, CdkPortalOutlet, ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { DialogConfig } from './dialogConfig';
import { ComponentRef, EmbeddedViewRef, EventEmitter, HostListener, ViewChild } from '@angular/core';
import { AnimationEvent } from '@angular/animations';

const throwAlreadyAttachedError = () => { throw Error('Dialog content is already attached'); };

export class DialogContainer extends BasePortalOutlet {
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
      throwAlreadyAttachedError();
    }
    return this._portalOutlet.attachComponentPortal(portal);
  }

  attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C> {
    if (this._portalOutlet.hasAttached()) {
      throwAlreadyAttachedError();
    }
    return this._portalOutlet.attachTemplatePortal(portal);
  }

}
