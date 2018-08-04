import { RouterModule, Routes } from '@angular/router';
import { NgModule} from '@angular/core';
import { HomeIndexComponent } from './home-index/home-index.component';




const routes: Routes = [
  {
    path: '',
    component: HomeIndexComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class HomeRoutingModule { }
