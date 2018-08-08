import { Component, Inject } from '@angular/core';
import { DialogRef } from '../dialogRef';
import { Confirm, ConfirmEvent, DIALOG_DATA } from '../dialogConfig';

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.less']
})
export class DialogConfirmComponent {
  constructor(private _dialogRef: DialogRef<DialogConfirmComponent>, @Inject(DIALOG_DATA) public data: Confirm) {}
  sure() {
    this._dialogRef.close(ConfirmEvent.SURE);
  }
  cancel() {
    this._dialogRef.close( ConfirmEvent.CANCEL);
  }

}
