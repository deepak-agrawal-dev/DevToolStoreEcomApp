import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  /**
   * Angular HttpClient.
   */
  private http = inject(HttpClient);

  /**
   * Base API URL.
   */
  private url = 'https://devtoolstoreecomappbackend.onrender.com';

  /**
   * Get all products.
   */
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.url+'/products');
  }

  /**
   * Get single product by id.
   */
  getProductById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(
      `${this.url}/products/${id}`
    );
  }
}
