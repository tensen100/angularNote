import { InjectionToken } from '@angular/core';
import {ScrollStrategy} from '@angular/cdk/overlay';

export interface DialogPosition {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

export interface Confirm {
  title?: string;
  content: string;
  sure?: Function;
  cancel?: Function;
}

// 对话框状态
export enum ConfirmEvent {
  SURE = 'sure',
  CANCEL = 'cancel'
}


export type Direction = 'left' | 'right';

export class DialogConfig<D = any> {
  // overlay pane 自定义class
  panelClass?: string ;
  // 是否有背景
  hasBackdrop?: boolean;
  // 自定义背景class
  backdropClass?: string;
  // 禁用点击背景关闭
  disableClose?: boolean;
  // 滚动策略
  scrollStrategy?: ScrollStrategy;
  // 定位
  position?: DialogPosition;
  width?: string;
  height?: string;
  minWidth?: string;
  minHeight?: string;
  maxWidth?: string;
  maxHeight?: string;
  direction?: Direction;
  data?: D | null = null;
}

export const DEFAULT_CONFIG: DialogConfig = {
  hasBackdrop: true,
  backdropClass: 'dark-backdrop',
  panelClass: 'dialog-panel',
  disableClose: false
};

export const DIALOG_DATA = new InjectionToken<any>('DIALOG_DATA');
