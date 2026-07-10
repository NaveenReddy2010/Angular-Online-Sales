import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  
  searchText :String='';

  showForm = false;
  id: Number=0;
  name: String= '';
  description: String='';
  price: Number=0;
  quantity: Number=0;
   selectedFile!: File;

   toggleForm(){
    this.showForm= !this.showForm
   }
   onFileSelected(event: any){
    this.selectedFile = event.target.File[0]
   }
  Add(){
    const data = {
      id: this.id,
    name: this.name,
    description: this.description,
    price: this.price,
    quantity: this.quantity

    }
  }
}
