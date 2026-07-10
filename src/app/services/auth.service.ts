import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:5211';
  constructor(private http: HttpClient) {}
   login(data: any) {
    return this.http.post(`${this.baseUrl}/Login`, data);
  }
  SignUp(data:any){
    return this.http.post(`${this.baseUrl}/Signup`, data);
  }
  getCardCodes(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/api/Dashboard/CardCode`);
  }
}
