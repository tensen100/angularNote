import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OverlayModule } from '@angular/cdk/overlay';

import { ShareModule } from '../share/share.module';
import { ServiceModule } from '../service/service.module';
import { AppRoutingModule } from '../app.routing';

@NgModule({
  imports: [
    // HttpClientModule,
    // HttpModule,
    AppRoutingModule,
    BrowserModule,
    OverlayModule,
    ShareModule,
    ServiceModule.forRoot(),
  ],
  exports: [
    AppRoutingModule
  ]
})
// 核心模块只加载一次
export class CoreModule {

  // @SkipSelf() 避免死循环
  // @Optional() 首次加载
  constructor(@SkipSelf() @Optional() parent: CoreModule) {
    if (parent) {
      throw new Error('模块已经存在，不能再次加载');
    }
  }
}
