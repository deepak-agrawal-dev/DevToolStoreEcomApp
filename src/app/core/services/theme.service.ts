import { effect, Injectable, signal } from '@angular/core';

export type AppTheme = 'light' | 'dark' | 'system';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  
  currentTheme = signal<AppTheme>('system');

  constructor() {
    this.loadTheme();

    effect( () => {
      this.applyTheme(this.currentTheme());
    });

    this.listenSystemChange();
  }

  setTheme(theme: AppTheme): void {
    this.currentTheme.set(theme);
    localStorage.setItem('theme', theme);
  }

  loadTheme(): void {
    const saved = localStorage.getItem('theme') as AppTheme | null;
    if(saved) {
      this.currentTheme.set(saved);
    }
  }

  private applyTheme(theme: AppTheme): void {
    const html = document.documentElement;

    if (theme === 'system') {
      const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      html.setAttribute('data-theme', darkMode ? 'dark' : 'light');
      return;
    }

    html.setAttribute('data-theme', theme);
  }

  private listenSystemChange(): void {
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    media.addEventListener( 'change', () => {
      if (this.currentTheme() === 'system') {
        this.applyTheme('system');
      }
    });
  }
}
