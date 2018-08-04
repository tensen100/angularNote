import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ConfirmComponent } from './components/confirm/confirm.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  declarations: [
    ConfirmComponent,

  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ConfirmComponent,
  ],
  entryComponents: [
    ConfirmComponent,
  ]
})
export class ShareModule { }
