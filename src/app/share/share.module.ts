import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ConfirmComponent } from './components/confirm/confirm.component';
import { DialogContainerComponent } from './components/dialog-container/dialog-container.component';
import {PortalModule} from '@angular/cdk/portal';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    PortalModule,
  ],
  declarations: [
    ConfirmComponent,
    DialogContainerComponent,

  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ConfirmComponent,
    DialogContainerComponent,
    PortalModule,
  ],
  entryComponents: [
    ConfirmComponent,
    DialogContainerComponent,
  ]
})
export class ShareModule { }
