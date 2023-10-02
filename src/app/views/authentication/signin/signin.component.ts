import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  username: string = '';
  password: string = '';

  signinForm: FormGroup;

  constructor(private authService: AuthenticationService) {
    this.signinForm = new FormGroup({
      mail: new FormControl(''),
      password: new FormControl(''),
    });
  }

  onSubmit(): void {
    const mail = this.signinForm.get('mail')?.value; // Get value from form control
    const password = this.signinForm.get('password')?.value; // Get value from form control

    const loggedIn = this.authService.signin(mail, password);

    if (loggedIn) {
      // Redirect to the dashboard or the desired route upon successful signin.
      this.signinForm.reset(); // Clear form values
    } else {
      // Handle signin failure (e.g., display an error message).
    }
  }
}
