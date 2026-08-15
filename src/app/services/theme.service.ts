import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private storageKey = 'sv-theme';

  init(): void {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(this.storageKey);
    } catch {
      /* ignore */
    }
    if (saved) {
      this.apply(saved);
    } else if (window.matchMedia?.('(prefers-color-scheme: light)').matches) {
      this.apply('light');
    }
  }

  toggle(): void {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const next = isLight ? 'dark' : 'light';
    this.apply(next);
    try {
      localStorage.setItem(this.storageKey, next);
    } catch {
      /* ignore */
    }
  }

  private apply(theme: string): void {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }
}
