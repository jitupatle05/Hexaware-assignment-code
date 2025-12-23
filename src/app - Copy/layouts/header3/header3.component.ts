import { Component, HostListener, signal } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';
import { NgIf, NgFor, CommonModule } from '@angular/common';

@Component({
  selector: 'app-header3',
  standalone: true,
imports: [CommonModule],
animations: [
    trigger('overlayAnim', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('220ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('180ms ease-in', style({ opacity: 0 }))
      ])
    ]),
    trigger('itemAnim', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(8px)' }),
        animate('200ms 80ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        )
      ])
    ]),
    trigger('arrowAnim', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(8px)' }),
    animate('180ms ease-out',
      style({ opacity: 1, transform: 'translateX(0)' })
    )
  ])
])

  ],
  templateUrl: './header3.component.html',
  styleUrl: './header3.component.scss'
})
export class Header3Component {
  isOpen = signal(false);

  menuItems = [
    // { label: 'HOME', path: '/' },
    { label: 'WORK', path: '/' },
    { label: 'CULTURE', path: '/culture' },
    { label: 'SERVICES', path: '/services' },
    { label: 'PARTNERS', path: '/partners' },
    { label: 'STORIES', path: '/stories' },
    { label: 'CAREERS', path: '/careers' },
    { label: 'EVENTS', path: '/events' },
    { label: 'CONTACT', path: '/contact' }
  ];

  countries = [
    'GLOBAL',
    'NEDERLAND',
    'UNITED STATES',
    'IRELAND',
    'UNITED KINGDOM',
    'DEUTSCHLAND',
    'SCHWEIZ'
  ];

  constructor(private router: Router) {}
@HostListener('document:keydown.escape')
handleEsc() {
  this.isOpen.set(false);
}

  toggle() {
    this.isOpen.update(v => !v);
  }

  navigate(path: string) {
    this.router.navigate([path]);
    this.isOpen.set(false);
  }

  isActive(path: string) {
    return this.router.url === path;
  }
}