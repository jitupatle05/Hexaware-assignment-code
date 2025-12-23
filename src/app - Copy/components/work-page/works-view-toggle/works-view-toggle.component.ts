import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export type WorksViewMode = 'grid' | 'list';

@Component({
  selector: 'app-works-view-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './works-view-toggle.component.html',
  styleUrls: ['./works-view-toggle.component.scss']
})
export class WorksViewToggleComponent {
  @Input({ required: true }) view!: WorksViewMode;
  @Output() viewChange = new EventEmitter<WorksViewMode>();

  setView(mode: WorksViewMode) {
    if (this.view !== mode) {
      this.viewChange.emit(mode);
    }
  }
}