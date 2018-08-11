import { OverlayRef } from '@angular/cdk/overlay';
import { Observable, Subject } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { DialogContainerComponent } from './dialog-container/dialog-container.component';
import {DialogRightContainerComponent} from './dialog-right-container/dialog-right-container.component';

const ESCAPE = 27;
export class DialogRef<T, R = any> {
  // 对话框中打开的组件
  componentInstance: T;
  disableClose: boolean | undefined = this._containerInstance.config.disableClose;
  private readonly _afterOpen = new Subject<void>();
  private readonly _beforeClose = new Subject<R | undefined>();
  private readonly _afterClosed = new Subject<R | undefined>();
  constructor(
    private _overlayRef: OverlayRef,
    private _containerInstance: DialogRightContainerComponent
  ) {
    // 打开后
    _containerInstance.animationStateChanged.pipe(
      filter( event => event.phaseName === 'done' && event.toState === 'enter'),
      take(1)
    ).subscribe( _ => {
      this._afterOpen.next();
      this._afterOpen.complete();
    });

    // 键盘ESC退出
    _overlayRef.keydownEvents().pipe(filter( event => event.keyCode === ESCAPE && !this.disableClose ))
      .subscribe( _ => this.close());

  }
  close(dialogResult?: R): void {
    // 关闭开始
    this._containerInstance.animationStateChanged.pipe(
      filter(event => event.phaseName === 'start'),
      take(1)
    ).subscribe( _ => {
      this._beforeClose.next(dialogResult);
      this._beforeClose.complete();
      this._overlayRef.detachBackdrop();
    });

    // 关闭结束
    this._containerInstance.animationStateChanged.pipe(
      filter(event => event.phaseName === 'done' && event.toState === 'exit'),
      take(1)
    ).subscribe( _ => {
      this._overlayRef.dispose();
      this._afterClosed.next(dialogResult);
      this._afterClosed.complete();
      this.componentInstance = null;
    });
    this._containerInstance.startExitAnimation();
  }
  afterClosed(): Observable<R | undefined> {
    return this._afterClosed.asObservable();
  }
  beforeClosed(): Observable<R | undefined> {
    return this._beforeClose.asObservable();
  }
  afterOpen(): Observable<void> {
    return this._afterOpen.asObservable();
  }
}
