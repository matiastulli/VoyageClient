import { NgModule } from '@angular/core';

// Angular Forms Modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Third-Party Module Imports (Angular Material)
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

// Angular Animation Module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Custom Component and Service Imports
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './authentication.service';


@NgModule({
  declarations: [LoginComponent],
  providers: [AuthenticationService],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  exports: [LoginComponent],
})
export class AuthenticationModule {}
