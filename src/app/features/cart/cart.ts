import { Component, computed, inject, signal } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { MatDialog } from '@angular/material/dialog';
import { CheckoutDialog } from '../../shared/components/checkout-dialog/checkout-dialog';
import { ToastService } from '../../core/services/toast.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {

  cartService = inject(CartService);
  toastService = inject(ToastService);
  dialog = inject(MatDialog);

  /**
   * Total amount.
   */
  total = computed(() =>
    this.cartService.items()
      .reduce((sum, item) =>
        sum + item.price, 0)
  );

  /**
   * Mock payment.
   */
  checkout(): void {
  const ref = this.dialog.open(
    CheckoutDialog,
    {
      width: '500px'
    }
  );
  ref.afterClosed()
    .subscribe(result => {
      if (result) {
        this.toastService.success(
          'Payment successful'
        );
        this.cartService.clearCart();
      }
    });
  }

}
