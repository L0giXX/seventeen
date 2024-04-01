import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgOptimizedImage, RouterLink],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'seventeen';

  public toggleMenu() {
    const menu = document.getElementById('menu');
    const link1 = document.getElementById('link-1');
    const link2 = document.getElementById('link-2');
    const link3 = document.getElementById('link-3');
    const menuOpenIcon = document.getElementById('menu-open-icon');
    const menuCloseIcon = document.getElementById('menu-close-icon');
    if (menu) {
      menu.classList.toggle('hidden');
      menu.classList.toggle('flex');
    }
    if (menuOpenIcon && menuCloseIcon) {
      menuOpenIcon.classList.toggle('hidden');
      menuCloseIcon.classList.toggle('hidden');
    }
  }
}
