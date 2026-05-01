import { Component, inject, Input } from '@angular/core';
import { IProduct } from '../../../core/models/product.model';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CartService } from '../../../core/services/cart.service';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-product-card',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {

  /**
   * Receive product from parent.
   */
  @Input({ required: true }) product!: IProduct;

  private cartService = inject(CartService);
  private toastService = inject(ToastService);
  private router = inject(Router);

  /**
   * Add product only.
   * Prevent detail navigation.
   */
  addToCart(event: MouseEvent): void {
    // event.preventDefault();
    event.stopPropagation();
    this.cartService.addProduct(this.product);
    this.toastService.success(
      'Added Successfully'
    );
  }

  /**
   * Open details page.
   */
  openDetails(): void {
    this.router.navigate([
      '/products',
      this.product.id
    ]);
  }

  setFallback(event: Event): void {
    const img = event.target as HTMLImageElement;

    img.src = 'https://placehold.co/600x400?text=Product';
  }
}
