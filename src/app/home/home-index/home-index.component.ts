import { Component} from '@angular/core';
import {Confirm, DialogRef, DialogService} from '../../share/module/dialog';


@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.less']
})
export class HomeIndexComponent {
  constructor(private dialog: DialogService) { }
  open() {}
  confirm() {
    const data: Confirm = {
      title: 'confirm',
      content: 'this is a Confirm',
      sure: () => { console.log('confirm sure !'); },
      cancel: () => { console.log('confirm cancel !'); }
    };
    this.dialog.confirm(data);
  }
  alert() {
    const data: Confirm = {
      title: 'confirm',
      content: 'this is a Confirm',
      sure: () => { console.log('confirm sure !'); },
    };
    this.dialog.confirm(data);
  }
  tips() {
    this.dialog.tips('this is a tips !!');
  }
}
