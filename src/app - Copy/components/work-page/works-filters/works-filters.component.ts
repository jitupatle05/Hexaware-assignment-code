import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-works-filters',
  imports: [CommonModule],
  templateUrl: './works-filters.component.html',
  styleUrls: ['./works-filters.component.scss']
})
export class WorksFiltersComponent {
  @Input() industry: string | null = null;
  @Input() category: string | null = null;

  @Output() filterChange = new EventEmitter<{
    industry: string | null;
    category: string | null;
  }>();

  update(industry: string | null, category: string | null) {
    this.filterChange.emit({ industry, category });
  }
}
