import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password-component',
  imports: [FormsModule],
  templateUrl: './forget-password-component.html',
  styleUrl: './forget-password-component.css',
})
export class ForgetPasswordComponent {
  forgetData = { userName: '', gmail: '' };
  constructor(private router: Router) { }

  backToLogin() {
    this.router.navigate(['']);
  }

  reset() {
    
  }
}
