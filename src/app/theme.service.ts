import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  emitData() {
    throw new Error('Method not implemented.');
  }
  constructor(@Inject(DOCUMENT) private document: Document) {}

  switchTheme(theme: string) {
      let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;

      if (themeLink) {
          themeLink.href = theme + '.css';
      }
  }
}
