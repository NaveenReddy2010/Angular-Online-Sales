import { Component } from '@angular/core';
import { EmailValidator, FormsModule } from '@angular/forms';
import { Router,RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';


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
   constructor(private http: HttpClient, private router: Router) {}

  onLogIn(){
    console.log("login clicked");
    debugger;
    const data = {
      email:'',
      username: this.username,
      password: this.password
    };
    this.http.post('https://localhost:7148/Login', data)
    .subscribe({
      next:(res: any) =>{
         alert ("LogIn Success");
          this.router.navigate(['/dashboard']);
      },
      error:(err) =>{
        console.error(err);
        alert("Invalid Username  or Password");
      }
    })
  }
}
  

