import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Material */
import { MaterialImportsModule } from '../material-imports.module';
import { FlexLayoutModule } from '@angular/flex-layout';

/* Pages */
import { TestBarComponent } from './test-bar.component';

/* Services */
import { AuthGuard } from '../services/auth.guard';
import { TestBarParamsService } from './services/test-bar-params.service';

import { ModuleWithProviders } from '@angular/compiler/src/core';

@NgModule({
  imports: [
    CommonModule,
    MaterialImportsModule,
    FlexLayoutModule
  ],
  declarations: [TestBarComponent],
  exports: [TestBarComponent],
})
export class TestBarModule {
  /* 
    This section is for the TestBarService.

    forRoot static method is going to create an instance of the param service
    available in the global scope of application.
    This way we can store configurations and data from the TestBar,
    and keep it even if the TestBar get destroyed (whitch happens every time we load a lazyLoaded Module).

    Inside the globalModule (app-module), we call "TestBarModule.forRoot()"
    in the providers section.
  */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TestBarModule,
      providers: [TestBarParamsService]
    }
  }
 }
