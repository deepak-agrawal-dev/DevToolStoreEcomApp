import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-product',
  imports: [RouterLink],
  templateUrl: './add-product.html',
  styleUrl: './add-product.scss',
})
export class AddProduct {
  products = signal<any[]>([]);

/* load(){
 this.http.get<any[]>(
 'http://localhost:3000/products'
 ).subscribe(x=>this.products.set(x));
}

delete(id:number){
 this.http.delete(
 `http://localhost:3000/products/${id}`
 ).subscribe(()=>this.load());
} */
}
