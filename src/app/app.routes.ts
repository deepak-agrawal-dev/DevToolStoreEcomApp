import { Routes } from '@angular/router';
import { AdminGuard } from './core/guards/admin.guard';

export const routes: Routes = [

   /**
   * Public Layout
   */
  {
    path: '',
    loadComponent: () => 
      import('./layout/main-layout/main-layout')
      .then(m => m.MainLayout),
      children: [
        {
          path: '',
          redirectTo: 'home',
          pathMatch: 'full'
        },

        {
          path: 'home',
          loadComponent: () =>
            import('./features/home/home')
            .then(h => h.Home)
        },

        {
          path: 'products',
          loadComponent: () =>
            import('./features/products/product-list/product-list')
              .then(m => m.ProductList)
        },

        {
          path: 'products/:id',
          loadComponent: () =>
            import('./features/products/product-detail/product-detail')
              .then(m => m.ProductDetail)
        },

        {
          path: 'cart',
          loadComponent: () =>
            import('./features/cart/cart')
              .then(m => m.Cart)
        },

        {
          path: 'login',
          loadComponent: () =>
            import('./features/login/login')
              .then(m => m.Login)
        }
      ]
  },

  /**
   * Admin Layout
   */
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadComponent: () =>
      import('./layout/admin-layout/admin-layout')
        .then(m => m.AdminLayout),

    children: [

      {
        path: '',
        loadComponent: () =>
          import('./features/admin/dashboard/dashboard')
            .then(m => m.Dashboard)
      },

      {
        path: 'admin-product',
        loadComponent: () =>
          import('./features/admin/add-product/add-product')
            .then(m => m.AddProduct)
      }

    ]
  },

  /**
   * Wildcard
   */

  /* {
    path: '**',
    redirectTo: 'home'
  }, */

  {
    path: '**',
    loadComponent: () =>
      import('./features/page-not-found/page-not-found')
        .then(m => m.PageNotFound)
  }

];