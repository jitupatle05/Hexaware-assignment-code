import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MenuService {
  isOpen = signal(false);

  mainMenu = [
    'HOME',
    'WORK',
    'CULTURE',
    'SERVICES',
    'PARTNERS',
    'STORIES',
    'CAREERS',
    'EVENTS',
    'CONTACT'
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

  activeIndex = signal(0);

  toggle() {
    this.isOpen.update(v => !v);
  }

  setActive(index: number) {
    this.activeIndex.set(index);
  }
}
