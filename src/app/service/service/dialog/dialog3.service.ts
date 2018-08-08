// import { Injectable, Injector, TemplateRef,} from '@angular/core';
// import { Overlay, OverlayConfig, OverlayRef} from '@angular/cdk/overlay';
// import { ComponentPortal, ComponentType, PortalInjector, TemplatePortal} from '@angular/cdk/portal';
// import { DialogOverlayRef} from './dialogOveryRef';
// import { DEFAULT_CONFIG, DialogConfig, DIALOG_DATA} from './dialogConfig';
// import { DialogContainerComponent } from '../../../share/module/dialog/dialog-container/dialog-container.component';
// import {ConfirmComponent} from '../../../share/module/dialog/confirm/confirm.component';
//
//
// @Injectable()
// export class Dialog3Service {
//
//   constructor(
//     private overlay: Overlay,
//     private injector: Injector
//   ) {}
//
//   open<T, D = any, R = any>(
//     componentOrTemplateRef: ComponentType<T> | TemplateRef<T>,
//     config: DialogConfig = {}): DialogOverlayRef<T, R> {
//     // 合并参数
//     config = {...DEFAULT_CONFIG, ...config};
//
//     // 创建弹出层
//     const overlayRef = this.createOverlay(config);
//
//     // 在弹出层上创建容器
//     const dialogContainer = this.attachDialogContainer(overlayRef, config);
//
//     // 把传入的组件添加到容器中
//     const dialogRef = this.attachDialogContent<T, R>(
//       componentOrTemplateRef,
//       dialogContainer,
//       overlayRef,
//       config);
//     // dialogRef.componentInstance = overlyComponent;
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
//   // 创建注入器
//   private createInjector<T>(
//     config: DialogConfig,
//     dialogRef: DialogOverlayRef<T>,
//     dialogContainer: DialogContainerComponent
//   ): PortalInjector {
//     // 为自定义 令牌实列化新的弱映射
//     const injectionTokens = new WeakMap();
//
//     // 设置自定义令牌
//     injectionTokens.set(DialogContainerComponent, dialogContainer);
//     injectionTokens.set(DialogOverlayRef, dialogRef);
//     injectionTokens.set(DIALOG_DATA, config.data);
//     return new PortalInjector(this.injector, injectionTokens);
//   }
//
//   // 创建容器
//   private attachDialogContainer(overlay: OverlayRef, config: DialogConfig) {
//     const injector = new PortalInjector(this.injector, new WeakMap([
//       [DialogConfig, config]
//     ]));
//     const containerPortal = new ComponentPortal(DialogContainerComponent, null, injector);
//     const containerRef = overlay.attach<DialogContainerComponent>(containerPortal);
//     return containerRef.instance;
//   }
//   // 把传入的组件添加到容器中
//   private attachDialogContent<T, R>(
//     componentOrTemplateRef: ComponentType<T> | TemplateRef<T>,
//     dialogContainer: DialogContainerComponent,
//     overlayRef: OverlayRef,
//     config: DialogConfig): DialogOverlayRef<T, R> {
//     const  dialogRef = new DialogOverlayRef<T, R>(overlayRef, dialogContainer);
//
//     // 点击背景关闭弹窗
//     if (config.hasBackdrop) {
//       overlayRef.backdropClick().subscribe(_ => {
//         dialogRef.close();
//         // if (!dialogRef.disableClose) {
//         //   dialogRef.close();
//         // }
//       });
//     }
//     if (componentOrTemplateRef instanceof TemplateRef ) {
//       console.log('template');
//     } else {
//       const injector = this.createInjector<T>(config, dialogRef, dialogContainer);
//       const contentPortal = new ComponentPortal(componentOrTemplateRef, null, injector);
//       const contentRef = dialogContainer.attachComponentPortal<T>(contentPortal);
//       dialogRef.componentInstance = contentRef.instance;
//     }
//
//     return dialogRef;
//   }
// }
