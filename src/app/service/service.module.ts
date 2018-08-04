import { ModuleWithProviders, NgModule } from '@angular/core';
import { DialogService } from './service/dialog/dialog.service';

@NgModule()
export class ServiceModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServiceModule,
      providers: [
        DialogService
      ]
    };
  }
}
