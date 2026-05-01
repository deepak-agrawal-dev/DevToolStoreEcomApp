import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { IProduct } from '../../../core/models/product.model';
import { ProductService } from '../../../core/services/product.service';
import { ProductCard } from '../../../shared/components/product-card/product-card';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList implements OnInit {

  private productService = inject(ProductService);

  products = signal<IProduct[]>([]);

  searchText = signal('');
  selectedCategory = signal('all');
  sortBy = signal('default');

  searchValue = '';
  search$ = new Subject<string>();

  loading = signal(true);
  skeletonItems = [1,2,3,4,5,6];

  constructor() {
    this.loadProducts();
  }

  ngOnInit(): void {
    this.search$
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe(value => {
        this.searchValue = value;
        this.loadProducts();
      });
  }

  /**
   * Fetch products.
   */
  loadProducts(): void {
    this.loading.set(true);
    this.productService.getProducts().subscribe(data => {
      this.products.set(data);
      this.loading.set(false);
    });
  }

  /**
   * Final filtered + sorted list.
   */
  finalProducts = computed(() => {
    let result = this.products();
    result = result.filter(item =>
      item.title
        .toLowerCase()
        .includes(this.searchValue.toLowerCase())
    );
    if (this.selectedCategory() !== 'all') {
      result = result.filter(
        x => x.category === this.selectedCategory()
      );
    }
    if (this.sortBy() === 'low') {
      result = [...result].sort((a,b) => a.price - b.price);
    }
    if (this.sortBy() === 'high') {
      result = [...result].sort((a,b) => b.price - a.price);
    }
    return result;
  });
  
}
