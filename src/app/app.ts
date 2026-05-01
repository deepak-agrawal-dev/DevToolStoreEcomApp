import { Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private router = inject(Router);

  constructor() {
    this.router.events
      .pipe(
        filter( event => event instanceof NavigationEnd)
      ).subscribe ( () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      })
  }
  
}
