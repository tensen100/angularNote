import {Component, Inject} from '@angular/core';
import {DIALOG_DATA} from '../../../service/service/dialog/dialog.service';
import {DialogOverlayRef} from '../../../service/service/dialog/dialogOveryRef';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.less'],
})
export class ConfirmComponent {
  constructor(
    public dialogRef: DialogOverlayRef,
    @Inject(DIALOG_DATA) public data: any
  ) {
    console.log(data);
  }
}
