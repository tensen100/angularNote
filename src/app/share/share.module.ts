import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DialogModule } from './module/dialog';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    DialogModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    DialogModule,
  ],
  entryComponents: []
})
export class ShareModule { }
