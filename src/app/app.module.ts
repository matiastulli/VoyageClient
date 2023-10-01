import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppConfig } from '../config';

// Custom Module Imports
import { AuthenticationModule } from '../authentication/authentication.module';

// Other Angular Modules
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthenticationModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: 'APP_CONFIG',
      useValue: AppConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  title = 'VoyageClient';
}
