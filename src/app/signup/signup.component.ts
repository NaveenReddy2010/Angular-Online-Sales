import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone:true,
  imports: [FormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  email: string = '';
  username: string = '';
  password: string = '';
   constructor(private authservice: AuthService) {}

onSignup() {

  debugger;  // 🔥 will pause in browser

  console.log("Email:", this.email);
  console.log("Username:", this.username);
  console.log("Password:", this.password);

  const data = {
    email: this.email,
    username: this.username,
    password: this.password
  };

  // this.http.post('https://localhost:7148/Signup', data)
    this.authservice.SignUp(data).subscribe({
      next: () => alert('User Registered Successfully'),
      error: (err) => {
        console.error(err);
        alert('Signup Failed');
      }
    });
}}