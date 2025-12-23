import { Component, Input } from '@angular/core';
import { Work } from '../../Models/work.model';

@Component({
  selector: 'app-work-card',
  standalone: true,
  imports: [],
  templateUrl: './work-card.component.html',
  styleUrl: './work-card.component.scss'
})
export class WorkCardComponent {
@Input() work!: Work;
}
