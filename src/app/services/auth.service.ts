import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://localhost:7148';
  constructor(private http: HttpClient) {}
   login(data: any) {
    return this.http.post(`${this.baseUrl}/Login`, data);
  }
  SignUp(data:any){
    return this.http.post(`${this.baseUrl}/Signup`, data);
  }
}
