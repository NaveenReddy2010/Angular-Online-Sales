import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet  } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { Customer } from '../Models/customers';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, RouterOutlet,FormsModule,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  username: string = '';
  cardcode: string = '';
  cardCodes: string[] = [];
  customers: Customer[] = [];
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.username = localStorage.getItem('username') || 'User';
    debugger
this.authService.getCardCodes().subscribe({
    next: (data) => {
      this.cardCodes = data;
      console.log(this.cardCodes);
    },
    error: (err) => {
      console.error('Failed to load card codes', err);
    }
  });
console.log(this.cardCodes);  }

  logout() {
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }
}