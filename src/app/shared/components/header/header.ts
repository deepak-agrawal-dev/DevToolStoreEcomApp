import { Component, inject, Signal, signal } from '@angular/core';
import { AppTheme, ThemeService } from '../../../core/services/theme.service';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../../core/services/cart.service';
import { AuthService } from '../../../core/services/auth.service';
import { CommonModule } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  /**
   * Inject Auth Service
   */
  authService = inject(AuthService);

  /**
   * Inject ThemeService globally.
   * Used to change light / dark / system theme.
   */
  themeService = inject(ThemeService);

  /**
   * Inject Cart Service.
   */
  cartService = inject(CartService);

  /**
   * Search text model.
   * Later we can connect with product filtering.
   */
  searchText = '';

  menuOpen = signal(false);
  themeOpen = signal(false);

  // isMobile = signal(window);
  private breakpointObserver = inject(BreakpointObserver);

  // Create a signal that is true when the 'Handset' breakpoint matches
  isMobile$ = this.breakpointObserver.observe([Breakpoints.Handset]);

  /**
   * Change selected theme.
   */
  changeTheme(theme: AppTheme): void {
    this.themeService.setTheme(theme);
  }

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  toggleTheme(): void {
    this.themeOpen.update(v => !v);
  }
}
