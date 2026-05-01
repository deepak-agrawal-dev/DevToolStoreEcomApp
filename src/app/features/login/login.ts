import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  email = '';
  password = '';

  private authService = inject(AuthService);
  private router = inject(Router);
  private toastService = inject(ToastService);

  loading = false;

  submit(): void {

    this.loading = true;
    
    this.authService
      .login(
        this.email,
        this.password
      )
      .subscribe(users => {
        this.loading = false;
        if (!users.length) {
          this.toastService.error(
            'Invalid credentials'
          );
          return;
        }
        const user = users[0];
        this.authService.setUser(user);
        this.toastService.success(
          'Login successful'
        );
        if (user.role === 'admin') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/home']);
        }

      });
  }
}
