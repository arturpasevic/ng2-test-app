import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from '../aot/src/app/app.module.ngfactory';
if (environment.production) {
    enableProdMode();
}
// platformBrowserDynamic().bootstrapModule(AppModule);
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
//# sourceMappingURL=main.js.map