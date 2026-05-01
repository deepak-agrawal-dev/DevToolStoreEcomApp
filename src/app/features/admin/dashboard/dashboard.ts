import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  private http = inject(HttpClient);
  authService = inject(AuthService)

  totalProducts = signal(0);
  totalOrders = signal(42);
  totalRevenue = signal(124500);

  ngOnInit(): void {

    this.http.get<any[]>(
      'http://localhost:3000/products'
    ).subscribe(data => {

      this.totalProducts.set(
        data.length
      );

    });
  }
}
