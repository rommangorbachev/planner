import { AppComponent } from './app/app.component';
import { importProvidersFrom, InjectionToken } from '@angular/core';
import { RouterModule } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { routes } from './app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DiscussionModule } from './app/features/discussion/discussion.module';
import { environment } from './environments/environment.development';

export const API_URL = new InjectionToken<string>('API_URL');
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      HttpClientModule,
      DiscussionModule,
      BrowserAnimationsModule,
      RouterModule.forRoot(routes)
     ),
    {
      provide: API_URL,
      useValue: environment.apiKey
    }
  ]
}).catch((err) => console.error(err));
