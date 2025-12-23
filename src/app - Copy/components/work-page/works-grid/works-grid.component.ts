import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Work } from '../../../Models/work.model';
import { ButtonComponent } from "../../../shared/button/button.component";
import { BrowserModule } from '@angular/platform-browser';

@Component({
  standalone: true,
  selector: 'app-works-grid',
  imports: [CommonModule, NgOptimizedImage, ButtonComponent],
  templateUrl: './works-grid.component.html',
  styleUrls: ['./works-grid.component.scss']
})
export class WorksGridComponent {
  @Input() works: Work[] = [];
  @Input() view: 'grid' | 'list' = 'grid';
}
