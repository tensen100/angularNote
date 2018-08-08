// import {Injectable, InjectionToken, Injector} from '@angular/core';
// import {Overlay, OverlayConfig, OverlayRef} from '@angular/cdk/overlay';
// import {ComponentPortal, PortalInjector} from '@angular/cdk/portal';
// import {DialogOverlayRef} from './dialogOveryRef';
// import {DEFAULT_CONFIG, DialogConfig, DIALOG_DATA} from './dialogConfig';
//
// @Injectable()
// export class DialogService {
//
//   constructor(
//     private overlay: Overlay,
//     private injector: Injector
//   ) {}
//   open(component, config: DialogConfig = {}) {
//     const dialogConfig = {...DEFAULT_CONFIG, ...config};
//
//     const overlayRef = this.createOverlay(dialogConfig);
//     const dialogRef = new DialogOverlayRef(overlayRef);
//     this.attachDialogContainer(component, overlayRef, config, dialogRef);
//     return dialogRef;
//   }
//
//   private getOverlayConfig(config: DialogConfig): OverlayConfig {
//
//     /**
//      * 定位策略，允许我们配置覆盖在屏幕上的位置
//      * global:用于覆盖与屏幕上其他元素无关的覆盖物，主要用于模态或根级通知
//      * connected: 用于相对于其他定位元素的覆盖，通常用于菜单或工具提示
//      */
//
//     const positionStrategy = this.overlay.position()
//       .global()
//       .centerHorizontally()
//       .centerVertically();
//
//     /**
//      * scrollStrategy 滚动策略
//      * noop: 什么也不做
//      * block：阻止面滚动
//      * close：滚动时自动关闭
//      * reposition：重新定位
//      */
//
//
//     const overlayConfig = new OverlayConfig({
//       hasBackdrop: config.hasBackdrop,
//       backdropClass: config.backdropClass,
//       panelClass: config.panelClass,
//       scrollStrategy: this.overlay.scrollStrategies.block(),
//       positionStrategy
//     });
//     return overlayConfig;
//   }
//
//   private createOverlay(config: DialogConfig) {
//     const overlayConfig = this.getOverlayConfig(config);
//     return this.overlay.create(overlayConfig);
//   }
//
//   private createInjector(config: DialogConfig, dialogRef: DialogOverlayRef ): PortalInjector {
//     // 为自定义 令牌实列化新的弱映射
//     const injectionTokens = new WeakMap();
//
//     // 设置自定义令牌
//     injectionTokens.set(DialogOverlayRef, dialogRef);
//     injectionTokens.set(DIALOG_DATA, config.data);
//     return new PortalInjector(this.injector, injectionTokens);
//   }
//
//   // 创建注入器和组件入口 ，并将入口连接到host
//   private attachDialogContainer(component, overlayRef: OverlayRef, config: DialogConfig, dialogRef: DialogOverlayRef) {
//
//     overlayRef.backdropClick().subscribe(_ => dialogRef.close());
//
//     const injector = this.createInjector(config, dialogRef);
//     const containerPortal = new ComponentPortal(component, null, injector);
//     const containerRef = overlayRef.attach(containerPortal);
//     return containerRef.instance;
//   }
// }
