import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../core/services/product.service';
import { IProduct } from '../../../core/models/product.model';
import { CartService } from '../../../core/services/cart.service';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetail {

  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);

  product = signal<IProduct | null>(null);

  private cartService = inject(CartService);
  private toastService = inject(ToastService);

  constructor() {
    this.loadProduct();
  }

  /**
   * Load product using route id.
   */
  loadProduct(): void {
    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );
    this.productService.getProductById(id)
      .subscribe(data => {
        this.product.set(data);
      });
  }

  /**
   * Add from detail page.
   */
  addToCart(): void {
    if (!this.product()) return;
    this.cartService.addProduct(this.product()!);
    this.toastService.success(
      'Added Successfully'
    );
  }
}
