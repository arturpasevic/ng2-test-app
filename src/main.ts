// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
// import { AppModule } from './app/app.module';

import { platformBrowser }    from '@angular/platform-browser';
import { AppModuleNgFactory } from '../aot/src/app/app.module.ngfactory';


if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule);
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
