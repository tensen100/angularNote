import {AfterViewInit, Component, OnInit} from '@angular/core';
import {DialogService} from '../../service/service/dialog/dialog.service';
import {ConfirmComponent} from '../../share/components/confirm/confirm.component';
import {DialogOverlayRef} from '../../service/service/dialog/dialogOveryRef';


@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.less']
})
export class HomeIndexComponent implements OnInit, AfterViewInit {
  // @ViewChild('add', {read: ViewContainerRef}) adHost: ViewContainerRef;
  // component = ConfirmComponent;
  // container: ViewContainerRef;
  constructor(
    // private componentFactoryResolver:  ComponentFactoryResolver,
    // private vc: ViewContainerRef,
    private dialog: DialogService) { }

  ngOnInit() {
    // this.loadComponent();
    // this.createContainer();
  }
  ngAfterViewInit() {
    const ref: DialogOverlayRef = this.dialog.open(ConfirmComponent, {
      data: {name: 'dialog', url: 'url'}
    });
    // setTimeout(() => {
    //   ref.close();
    // }, 2000);
  }

  /*loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component);

    const viewContainerRef = this.adHost;
    console.log(viewContainerRef);
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance).title = 'Hello Dialog';
  }*/
}
