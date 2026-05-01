import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ProductCard } from '../../shared/components/product-card/product-card';
import { RouterLink } from '@angular/router';
import { IProduct } from '../../core/models/product.model';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ProductCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {

  private productService = inject(ProductService);

  products = signal<IProduct[]>([]);

  constructor() {
  }

  ngOnInit(){
    this.loadProducts();
  }

  /**
   * Load products from API.
   */
  loadProducts(): void {
    this.productService.getProducts().subscribe( (data: IProduct[]) => {
      console.log(data);
      this.products.set(data);
    });
  }

  /**
   * Section wise products.
   */

  trending = computed(() =>
    this.products().filter(x => x.trending)
  );

  featured = computed(() =>
    this.products().filter(x => x.featured)
  );

  popular = computed(() =>
    this.products().filter(x => x.popular)
  );

  newArrivals = computed(() =>
    this.products().filter(x => x.newArrival)
  );

}
