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
}
