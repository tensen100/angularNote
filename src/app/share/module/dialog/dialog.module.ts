import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogContainerComponent } from './dialog-container/dialog-container.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { DialogService } from './dialog.service';
import { DialogConfirmComponent} from './dialog-confirm/dialog-confirm.component';
import { DialogAlertComponent } from './dialog-alert/dialog-alert.component';
import { DialogHeaderComponent } from './dialog-header/dialog-header.component';
import { DialogFooterComponent } from './dialog-footer/dialog-footer.component';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { DialogTipsComponent } from './dialog-tips/dialog-tips.component';
import {DialogRightContainerComponent} from './dialog-right-container/dialog-right-container.component';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule,
  ],
  declarations: [
    DialogContainerComponent,
    DialogConfirmComponent,
    DialogTipsComponent,
    DialogAlertComponent,
    DialogHeaderComponent,
    DialogFooterComponent,
    DialogContentComponent,
    DialogRightContainerComponent,
  ],
  exports: [
    DialogContainerComponent,
    DialogConfirmComponent,
    DialogTipsComponent,
    DialogAlertComponent,
    DialogHeaderComponent,
    DialogFooterComponent,
    DialogContentComponent,
    DialogRightContainerComponent,
  ],
  entryComponents: [
    DialogContainerComponent,
    DialogConfirmComponent,
    DialogTipsComponent,
    DialogAlertComponent,
    DialogRightContainerComponent,
  ],
  providers: [
    DialogService
  ]
})
export class DialogModule { }
