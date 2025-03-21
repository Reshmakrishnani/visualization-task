import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideStore, StoreModule } from '@ngrx/store';
import { dashboardReducer } from './reducer/dashboard.reducers';
import { DashboardComponent } from './dashboard/dashboard.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { DashboardEffects } from './effects/dashboard.effects';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [

 // Set up the store

 provideRouter(routes),

 importProvidersFrom(BrowserAnimationsModule,
StoreModule.forRoot({ Dashboard: dashboardReducer }),
EffectsModule.forRoot([DashboardEffects]),
HttpClientModule
 ),
  ]
})
  .catch((err) => console.error(err));
