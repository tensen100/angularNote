import {Component, Inject, OnInit} from '@angular/core';
import {DIALOG_DATA} from '../dialogConfig';

@Component({
  selector: 'app-dialog-tips',
  templateUrl: './dialog-tips.component.html',
  styleUrls: ['./dialog-tips.component.less']
})
export class DialogTipsComponent {

  constructor(@Inject(DIALOG_DATA) public data: string) { }
}
