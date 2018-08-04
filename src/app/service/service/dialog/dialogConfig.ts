export interface Image {
  name: string;
  url: string;
}
export interface DialogConfig {
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
