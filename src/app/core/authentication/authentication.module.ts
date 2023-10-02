import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// This Module Imports
import { SigninComponent } from '@authentication/views'

// Service Imports
import { AuthenticationService } from '@authentication/services';

// Shared Imports
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@shared/modules'

@NgModule({
  declarations: [SigninComponent],
  providers: [AuthenticationService],
  imports: [
    FormsModule, 
    ReactiveFormsModule,
    CommonModule,
    MaterialModule
  ],
  exports: [SigninComponent],
})
export class AuthenticationModule {}
