import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { IProduct } from '../models/product.model';
import { ToastService } from './toast.service';

/**
 * Cart item structure.
 */
export interface ICartItem extends IProduct {
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  
  /**
   * Store cart items globally.
   */
  items = signal<ICartItem[]>([]);
  toastService = inject(ToastService);

  constructor() {
    this.loadCart();

    /**
     * Auto save whenever cart changes.
     */
    effect( () => {
      localStorage.setItem(
        'cart',
        JSON.stringify(this.items())
      );
    });
  }

  /**
   * Load cart from localStorage.
   */
  loadCart() {
    const savedItems = localStorage.getItem('cart');
    if (savedItems) {
      this.items.set(JSON.parse(savedItems));
    }
  } 

   /**
   * Add product to cart.
   */
  addProduct(product: IProduct):void {
    const existingItems = this.items()
      .find(x => x.id === product.id);
    
    if (existingItems) {
      this.increaseQuantity(product.id);
      return;
    }

    this.items.update( current => [
      ...current,
      {
        ...product,
        quantity: 1
      }
    ]);
  }

  /**
   * Increase quantity.
   */
  increaseQuantity(id: number): void {
    this.items.update( current =>
      current
        .map( item =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    );
  }

  /**
   * Decrease quantity.
   */
  decreaseQuantity(id: number): void {
    this.items.update( current =>
      current
        .map( item =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1
              }
            : item
        )
        .filter ( item =>
          item.quantity > 0
        )
    );
  }

  /**
   * Remove item by id.
   */
  removeProduct(id: number): void {
    this.items.update( current => 
      current.filter( x => x.id !== id)
    );
    this.toastService.error(
      'Removed Successfully'
    );
  }

  /**
   * Empty cart.
   */
  clearCart(): void {
    this.items.set([]);
  }

  /**
   * Cart count.
   */
  count = computed( () =>
    this.items()
      .reduce( (sum, item) =>
        sum + item.quantity, 0
      )
  );

  /**
   * Total price.
   */

  total = computed( () =>
    this.items()
      .reduce( (sum, item) => 
        sum + item.price * item.quantity, 0
      )
  );
}
