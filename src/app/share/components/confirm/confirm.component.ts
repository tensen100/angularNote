import { Component, Inject } from '@angular/core';
import { DIALOG_DATA } from '../../../service/service/dialog/dialogConfig';
import { DialogOverlayRef } from '../../../service/service/dialog/dialogOveryRef';


@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.less'],
})
export class ConfirmComponent {
  loading = true;
  constructor(
    public dialogRef: DialogOverlayRef<ConfirmComponent>,
    @Inject(DIALOG_DATA) public data: any
  ) {
    console.log(data);
  }
  onLoad() {
    this.loading = false;
  }
  close() {
    this.dialogRef.close('message: close !!');
  }
}
