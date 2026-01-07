import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-component',
  imports: [FormsModule],
  templateUrl: './register-component.html',
  styleUrl: './register-component.css',
})
export class RegisterComponent {
  showPassword = false;
  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  registerData = {
    userName: '', gmail: '', password: '', confirmPassword: ''
  }
  constructor(private router: Router) { }

  backToLogin() {
    this.router.navigate(['']);
  }
  register() {

  }
}
