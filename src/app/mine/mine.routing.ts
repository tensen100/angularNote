import { RouterModule, Routes } from '@angular/router';
import { NgModule} from '@angular/core';
import { MineIndexComponent } from './mine-index/mine-index.component';




const routes: Routes = [
  {
    path: '',
    component: MineIndexComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class MineRoutingModule { }
