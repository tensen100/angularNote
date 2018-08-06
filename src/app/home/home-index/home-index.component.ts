import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ConfirmComponent} from '../../share/components/confirm/confirm.component';
import {DialogOverlayRef} from '../../service/service/dialog/dialogOveryRef';
// import {Dialog2Service} from '../../service/service/dialog/dialog2.service';
// import {DialogService} from '../../service/service/dialog/dialog.service';
import {Dialog3Service} from '../../service/service/dialog/dialog3.service';
import {CdkPortalOutlet, ComponentPortal} from '@angular/cdk/portal';


@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.less']
})
export class HomeIndexComponent implements AfterViewInit {
  @ViewChild(CdkPortalOutlet) portalOutlet: CdkPortalOutlet;
  portal: ComponentPortal<ConfirmComponent>;
  constructor(private dialog: Dialog3Service) { }
  ngAfterViewInit() {
    this.open();
    // console.log(this.portalOutlet);
    // this.portal = new ComponentPortal<ConfirmComponent>(ConfirmComponent);

  }
  open() {
    setTimeout(() => {
      const ref: DialogOverlayRef<ConfirmComponent> = this.dialog.open(ConfirmComponent, {
        data: {name: '图片', url: '/assets/images/1.jpg'}
      });
    }, 1000);
  }
}
