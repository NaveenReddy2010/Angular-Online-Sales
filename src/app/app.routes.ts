import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
// import { HomeComponent } from './home/home.component'; // optional but recommended

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
    //   { path: '', component: HomeComponent },        // 👈 default page
      { path: 'products', component: ProductsComponent },
      { path: 'Orders', component: OrdersComponent }
    ]
  }
];