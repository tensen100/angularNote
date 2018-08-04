import { NgModule } from '@angular/core';
import { HomeIndexComponent } from './home-index/home-index.component';
import { ShareModule } from '../share/share.module';
import { HomeRoutingModule } from './home.routing';

@NgModule({
  imports: [
    ShareModule,
    HomeRoutingModule
  ],
  declarations: [HomeIndexComponent]
})
export class HomeModule { }
