import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router,RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string= '';
  username:  string = '';
  password:  string ='';
  
   constructor(private authService : AuthService, private router: Router){}

  onLogIn(){
    console.log("login clicked");
    debugger;
    const data = {
      email:'',
      username: this.username,
      password: this.password
    };
    // this.http.post('https://localhost:7148/Login', data)
    this.authService.login(data).subscribe({
      next:(res: any) =>{
         alert ("LogIn Success");
         localStorage.setItem('username',this.username);
          this.router.navigate(['/dashboard']);
      },
      error:(err) =>{
        console.error(err);
        alert("Invalid Username  or Password");
      }
    })
  }
}
  

