import { NgModule } from '@angular/core';
import { MineIndexComponent } from './mine-index/mine-index.component';
import { ShareModule } from '../share/share.module';
import { MineRoutingModule } from './mine.routing';

@NgModule({
  imports: [
    ShareModule,
    MineRoutingModule,
  ],
  declarations: [MineIndexComponent]
})
export class MineModule { }
