import { Injectable } from '@angular/core';

export const darkTheme = {
  'primary-color': '#b0b6b2',
  'background-color': '#000',
  'text-color': '#fff'
};

export const lightTheme = {
  'primary-color': '#fff',
  'background-color': '#b0b6b2',
  'text-color': '#2d2d2d'
};

@Injectable({ providedIn: 'root' })
export class ThemeService {
  toggleDark() {
    this.setTheme(darkTheme);
  }

  toggleLight() {
    this.setTheme(lightTheme);
  }

  private setTheme(theme: {}) {
    Object.keys(theme).forEach(k =>
      document.documentElement.style.setProperty(`--${k}`, theme[k])
    );
  }
}
