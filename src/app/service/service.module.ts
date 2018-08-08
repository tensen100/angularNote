import { ModuleWithProviders, NgModule } from '@angular/core';
// import { DialogService } from './service/dialog/dialog.service';
// import { Dialog2Service } from './service/dialog/dialog2.service';
// import { Dialog3Service } from './service/dialog/dialog3.service';

@NgModule()
export class ServiceModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServiceModule,
      providers: [
        // DialogService,
        // Dialog2Service,
        // Dialog3Service
      ]
    };
  }
}
