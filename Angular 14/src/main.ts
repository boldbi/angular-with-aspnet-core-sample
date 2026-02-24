import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app/app.component';
import { Dashboard } from './app/dashboard/dashboard.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: Dashboard },
    ]),
    importProvidersFrom(HttpClientModule)
  ]
}).catch(err => console.error(err));
