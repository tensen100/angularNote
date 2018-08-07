import { Component} from '@angular/core';
import { ConfirmComponent} from '../../share/components/confirm/confirm.component';
import { DialogOverlayRef} from '../../service/service/dialog/dialogOveryRef';
import { Dialog3Service} from '../../service/service/dialog/dialog3.service';


@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.less']
})
export class HomeIndexComponent {
  constructor(private dialog: Dialog3Service) { }

  open() {
    const ref: DialogOverlayRef<ConfirmComponent> = this.dialog.open(ConfirmComponent, {
      data: {name: '图片', url: '/assets/images/1.jpg'}
    });
    ref.beforeClosed().subscribe( msg => {
      console.log('---> beforeClose');
      console.log(msg);
    });
    ref.afterClosed().subscribe( msg => {
      console.log('---> afterClose');
      console.log(msg);
    });
    ref.afterOpen().subscribe( _ => {
      console.log('---> afterOpen');
    });
  }
}
