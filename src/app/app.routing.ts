import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';



const appRoutes: Routes = [
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
  },
  {
    path: 'mine',
    loadChildren: './mine/mine.module#MineModule',
  },
  {
    path: 'more',
    loadChildren: './more/more.module#MoreModule',
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home' // 重定向
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules // 预加载
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
