import { Component } from '@angular/core'; 
import { NgIf, NgFor, CommonModule } from '@angular/common';
import { MenuService } from '../../services/menu.service';
import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-overlay-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './overlay-menu.component.html',
  styleUrl: './overlay-menu.component.scss',
  animations: [
    trigger('overlayAnim', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0 }))
      ])
    ]),
    trigger('menuItemAnim', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(10px)' }),
    animate('250ms 100ms ease-out',
      style({ opacity: 1, transform: 'translateY(0)' })
    )
  ])
]),
  ]
})
export class OverlayMenuComponent {
  constructor(public menu: MenuService) {}
}
