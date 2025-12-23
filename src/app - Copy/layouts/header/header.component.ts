import { Component, signal, effect } from '@angular/core';
import { RouterLink } from '@angular/router'; 
import { menuFadeAnimation } from '../../Animations';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [RouterLink,CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [menuFadeAnimation]
})
export class HeaderComponent {

  // UI state → signals are perfect here
  menuOpen = signal(false);

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  constructor() {
    // ADVANCED: side-effect tied to signal
    effect(() => {
      document.body.style.overflow = this.menuOpen()
        ? 'hidden'
        : '';
    });
  }



  
}

