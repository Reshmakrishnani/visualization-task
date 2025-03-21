import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { dashboardReducer } from '../reducer/dashboard.reducers';
import { provideStore } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DashboardEffects } from '../effects/dashboard.effects';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync(), provideStore({ dashboard: dashboardReducer }),
    importProvidersFrom(
EffectsModule.forRoot([DashboardEffects]),
HttpClientModule
    )
  ]
};
