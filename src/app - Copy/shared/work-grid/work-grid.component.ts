import { Component, Input } from '@angular/core';
import { Work } from '../../Models/work.model';
import { CommonModule } from '@angular/common';
import { WorkCardComponent } from "../work-card/work-card.component";

@Component({
  selector: 'app-work-grid',
  standalone: true,
  imports: [CommonModule, WorkCardComponent],
  templateUrl: './work-grid.component.html',
  styleUrl: './work-grid.component.scss'
})
export class WorkGridComponent {
 @Input() works: Work[] = [];
}
