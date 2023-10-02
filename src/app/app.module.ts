// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// This Module Imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Shared Imports
import { MaterialModule } from '@shared/modules';
import { AuthenticationModule } from '@authentication/modules';
import { HomeModule, SliderModule, NavbarModule } from '@home/modules';

const sharedModules = [MaterialModule]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
		CommonModule,
    BrowserModule,
    HomeModule,
    SliderModule,
    NavbarModule,
    AuthenticationModule,
		BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
		// Shared
		...sharedModules,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  title = 'VoyageClient';
}
