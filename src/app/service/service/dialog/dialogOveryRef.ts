import {OverlayRef} from '@angular/cdk/overlay';
import {Observable, Subject} from 'rxjs';
import {filter, take} from 'rxjs/operators';
import {DialogContainerComponent} from '../../../share/components/dialog-container/dialog-container.component';

export class DialogOverlayRef<T, R = any> {
  // 对话框中打开的组件
  componentInstance: T;
  private _beforeClose = new Subject<void>();
  private _afterClosed = new Subject<void>();
  constructor(
    private overlayRef: OverlayRef,
    public containerInstance?: DialogContainerComponent
  ) {}
  close(): void {
    this.containerInstance.animationStateChanged.pipe(
      filter(event => event.phaseName === 'start'),
      take(1)
    ).subscribe( _ => {
      this._beforeClose.next();
      this._beforeClose.complete();
      this.overlayRef.detachBackdrop();
    });

    this.containerInstance.animationStateChanged.pipe(
      filter(event => event.phaseName === 'done' && event.toState === 'leave'),
      take(1)
    ).subscribe( _ => {
      this.overlayRef.dispose();
      this._beforeClose.next();
      this._beforeClose.complete();
      this.componentInstance = null;
    });
    this.containerInstance.startExitAnimation();
  }
  afterClosed(): Observable<void> {
    return this._afterClosed.asObservable();
  }
  beforeClosed(): Observable<void> {
    return this._beforeClose.asObservable();
  }
}
