import {InjectionToken} from '@angular/core';

export interface Image {
  name: string;
  url: string;
}
export class DialogConfig {
  panelClass?: string;
  hasBackdrop?: boolean;
  backdropClass?: string;
  data?: Image;
}

export const DEFAULT_CONFIG: DialogConfig = {
  hasBackdrop: true,
  backdropClass: 'dark-backdrop',
  panelClass: 'tm-file-preview-dialog-panel'
};

export const DIALOG_DATA = new InjectionToken<Image>('DIALOG_DATA');
