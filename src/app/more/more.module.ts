import { NgModule } from '@angular/core';
import { MoreIndexComponent } from './more-index/more-index.component';
import { ShareModule } from '../share/share.module';
import { MoreRoutingModule } from './more.routing';

@NgModule({
  imports: [
    ShareModule,
    MoreRoutingModule
  ],
  declarations: [MoreIndexComponent]
})
export class MoreModule { }
