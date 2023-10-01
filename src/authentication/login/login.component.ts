import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  loginForm: FormGroup;

  constructor(private authService: AuthenticationService) {
    this.loginForm = new FormGroup({
      mail: new FormControl(''),
      password: new FormControl(''),
    });
  }

  onSubmit(): void {
    const mail = this.loginForm.get('mail')?.value; // Get value from form control
    const password = this.loginForm.get('password')?.value; // Get value from form control

    const loggedIn = this.authService.login(mail, password);

    if (loggedIn) {
      // Redirect to the dashboard or the desired route upon successful login.
      this.loginForm.reset(); // Clear form values
    } else {
      // Handle login failure (e.g., display an error message).
    }
  }
}
