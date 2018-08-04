/*
import {ComponentRef, Injectable, InjectionToken, Injector} from '@angular/core';
import {Overlay, OverlayConfig, OverlayRef} from '@angular/cdk/overlay';
import {ComponentPortal, PortalInjector} from '@angular/cdk/portal';
import {ConfirmComponent} from '../../share/components/confirm/confirm.component';

interface Image {
  name: string;
  url: string;
}

interface DialogConfig {
  panelClass?: string;
  hasBackdrop?: boolean;
  backdropClass?: string;
  data?: Image;
}

const DEFAULT_CONFIG: DialogConfig = {
  hasBackdrop: true,
  backdropClass: 'dark-backdrop',
  panelClass: 'tm-file-preview-dialog-panel'
};

export class DialogOverlayRef {
  constructor(private overlayRef: OverlayRef) {}
  close(): void {
    this.overlayRef.dispose();
  }
}
export const DIALOG_DATA = new InjectionToken<Image>('DIALOG_DATA');


@Injectable()
export class DialogService {

  constructor(
    private overlay: Overlay,
    private injector: Injector
  ) {}
  open(config: DialogConfig = {}) {
    const dialogConfig = {...DEFAULT_CONFIG, ...config};

    const overlayRef = this.createOverlay(dialogConfig);

    const confirmPortal = new ComponentPortal(ConfirmComponent);
    overlayRef.attach(confirmPortal);
    const dialogRef = new DialogOverlayRef(overlayRef);
    const dialogContainer = this.attachDialogContainer(overlayRef, config, dialogRef);
    overlayRef.backdropClick().subscribe(_ => dialogRef.close());
    return dialogRef;
  }

  private getOverlayConfig(config: DialogConfig): OverlayConfig {

    /!**
     * 定位策略，允许我们配置覆盖在屏幕上的位置
     * global:用于覆盖与屏幕上其他元素无关的覆盖物，主要用于模态或根级通知
     * connected: 用于相对于其他定位元素的覆盖，通常用于菜单或工具提示
     *!/

    const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();

    /!**
     * scrollStrategy 滚动策略
     * noop: 什么也不做
     * block：阻止面滚动
     * close：滚动时自动关闭
     * reposition：重新定位
     *!/


    const overlayConfig = new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    });
    return overlayConfig;
  }

  private createOverlay(config: DialogConfig) {
    const overlayConfig = this.getOverlayConfig(config);
    return this.overlay.create(overlayConfig);
  }

  private createInjector(config: DialogConfig, dialogRef: DialogOverlayRef ): PortalInjector {
    // 为自定义 令牌实列化新的弱映射
    const injectionTokens = new WeakMap();

    // 设置自定义令牌
    injectionTokens.set(DialogOverlayRef, dialogRef);
    injectionTokens.set(DIALOG_DATA, config.data);
    return new PortalInjector(this.injector, injectionTokens);
  }

  // 创建注入器和组件入口 ，并将入口连接到host
  private attachDialogContainer(overlayRef: OverlayRef, config: DialogConfig, dialogRef: DialogOverlayRef) {
    const injector = this.createInjector(config, dialogRef);
    const containerPortal = new ComponentPortal(ConfirmComponent, null, injector);
    const containerRef: ComponentRef<ConfirmComponent> = overlayRef.attach(containerPortal);
    return containerRef.instance;
  }
}
*/
