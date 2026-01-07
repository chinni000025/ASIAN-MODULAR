import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule,],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  showPassword = false;

  loginData = {
    userName: '', password: ''
  };
  constructor(private router: Router) { }
  login() {

  }

  register() {
    this.router.navigate(['/register']);
  }

  forgetPassword() {
    this.router.navigate(['/forgetPassword']);
  }
  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
