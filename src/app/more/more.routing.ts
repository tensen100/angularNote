import { RouterModule, Routes } from '@angular/router';
import { NgModule} from '@angular/core';
import {MoreIndexComponent} from './more-index/more-index.component';




const routes: Routes = [
  {
    path: '',
    component: MoreIndexComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class MoreRoutingModule { }
