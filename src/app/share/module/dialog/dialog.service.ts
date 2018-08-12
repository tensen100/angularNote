import { Injectable, Injector, TemplateRef } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import {ComponentPortal, ComponentType, PortalInjector, TemplatePortal} from '@angular/cdk/portal';
import {DEFAULT_CONFIG, DialogConfig, DIALOG_DATA, Confirm, ConfirmEvent, DialogPosition} from './dialogConfig';
import { DialogContainerComponent } from './dialog-container/dialog-container.component';
import { DialogConfirmComponent } from './dialog-confirm/dialog-confirm.component';
import { DialogRef } from './dialogRef';
import { DialogTipsComponent } from './dialog-tips/dialog-tips.component';
import { DialogRightContainerComponent } from './dialog-right-container/dialog-right-container.component';
import { DialogContainer } from './dialogContainer';

@Injectable()
export class DialogService {

  constructor(
    private overlay: Overlay,
    private injector: Injector
  ) {}

  open<T, D = any, R = any>(
    componentOrTemplateRef: ComponentType<T> | TemplateRef<T>,
    config: DialogConfig = {}): DialogRef<T, R> {
    // 合并参数
    config = {...DEFAULT_CONFIG, ...config};

    // 创建弹出层
    const overlayRef = this.createOverlay(config);

    // 在弹出层上创建容器
    const dialogContainer = this.attachDialogContainer(overlayRef, config);

    // 把传入的组件添加到容器中
    const dialogRef = this.attachDialogContent<T, R>(
      componentOrTemplateRef,
      dialogContainer,
      overlayRef,
      config);
    return dialogRef;
  }

  confirm(confirmData: Confirm) {
    const confirmRef = this.open(DialogConfirmComponent, {
      width: '500px',
      direction: 'right',
      data: confirmData});
    confirmRef.afterClosed().subscribe( type => type && confirmData[type]() );
  }

  tips(content: string, time: number = 1500) {
    const tipsRef = this.open(DialogTipsComponent, {
      hasBackdrop: false,
      data: content});
    setTimeout(_ => {
      tipsRef.close();
    }, time);
  }

  private getOverlayConfig(config: DialogConfig): OverlayConfig {

    /**
     * 定位策略，允许我们配置覆盖在屏幕上的位置
     * global:用于覆盖与屏幕上其他元素无关的覆盖物，主要用于模态或根级通知
     * connected: 用于相对于其他定位元素的覆盖，通常用于菜单或工具提示
     */
    const position: DialogPosition = config.position;
    const positionStrategy = this.overlay.position().global();
    if (position && (position.left || position.right)) {
      position.left ? positionStrategy.left(position.left) : positionStrategy.right(position.right);
    } else {
      positionStrategy.centerHorizontally();
    }

    if (position && (position.top || position.bottom)) {
      position.top ? positionStrategy.top(position.top) : positionStrategy.bottom(position.bottom);
    } else {
      positionStrategy.centerVertically();
    }

    /**
     * scrollStrategy 滚动策略
     * noop: 什么也不做
     * block：阻止面滚动
     * close：滚动时自动关闭
     * reposition：重新定位
     */
    const scrollStrategy = config.scrollStrategy || this.overlay.scrollStrategies.block();

    return new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      width: config.width,
      height: config.height,
      minWidth: config.minWidth,
      minHeight: config.minHeight,
      maxWidth: config.maxWidth,
      maxHeight: config.maxHeight,
      scrollStrategy: scrollStrategy,
      positionStrategy: positionStrategy
    });
  }

  private createOverlay(config: DialogConfig) {
    const overlayConfig = this.getOverlayConfig(config);
    return this.overlay.create(overlayConfig);
  }

  // 创建注入器
  private createInjector<T>(
    config: DialogConfig,
    dialogRef: DialogRef<T>,
    dialogContainer: DialogContainer
  ): PortalInjector {
    // 为自定义 令牌实列化新的弱映射
    const injectionTokens = new WeakMap();

    // 设置自定义令牌
    injectionTokens.set(DialogContainer, dialogContainer);
    injectionTokens.set(DialogRef, dialogRef);
    injectionTokens.set(DIALOG_DATA, config.data);
    return new PortalInjector(this.injector, injectionTokens);
  }

  // 创建容器
  private attachDialogContainer(overlay: OverlayRef, config: DialogConfig) {
    const injector = new PortalInjector(this.injector, new WeakMap([
      [DialogConfig, config]
    ]));
    let container: ComponentType<any>;
    if (config.direction && config.direction === 'right') {
      container = DialogRightContainerComponent;
    } else {
      container = DialogContainerComponent;
    }
    const containerPortal = new ComponentPortal(container, null, injector);
    const containerRef = overlay.attach<DialogContainer>(containerPortal);
    return containerRef.instance;
  }

  // 把传入的组件添加到容器中
  private attachDialogContent<T, R>(
    componentOrTemplateRef: ComponentType<T> | TemplateRef<T>,
    dialogContainer: DialogContainer,
    overlayRef: OverlayRef,
    config: DialogConfig): DialogRef<T, R> {
    const  dialogRef = new DialogRef<T, R>(overlayRef, dialogContainer);

    // 点击背景关闭弹窗
    if (config.hasBackdrop) {
      overlayRef.backdropClick().subscribe(_ => {
        if (!dialogRef.disableClose) {
          dialogRef.close();
        }
      });
    }

    if (componentOrTemplateRef instanceof TemplateRef ) {
      dialogContainer.attachTemplatePortal(
        new TemplatePortal<T>(componentOrTemplateRef, null,
          <any>{ $implicit: config.data, dialogRef }));
    } else {
      const injector = this.createInjector<T>(config, dialogRef, dialogContainer);
      const contentPortal = new ComponentPortal(componentOrTemplateRef, null, injector);
      const contentRef = dialogContainer.attachComponentPortal<T>(contentPortal);
      dialogRef.componentInstance = contentRef.instance;
    }

    return dialogRef;
  }
}
