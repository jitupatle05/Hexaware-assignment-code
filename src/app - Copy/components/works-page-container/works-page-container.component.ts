import {
  Component,
  computed,
  effect,
  inject,
  Input,
  signal
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';  
import { CommonModule } from '@angular/common';
import { WorksapiService } from '../../services/worksapi.service';
import { Work } from '../../Models/work.model';
import { HttpClientModule } from '@angular/common/http';
import { WorksGridComponent } from '../work-page/works-grid/works-grid.component';
import { WorksFiltersComponent } from '../work-page/works-filters/works-filters.component';
import { WorksViewToggleComponent } from '../work-page/works-view-toggle/works-view-toggle.component';
@Component({
  selector: 'app-works-page-container',
  standalone: true,
  imports: [CommonModule,
      WorksGridComponent,
      WorksFiltersComponent,
      WorksViewToggleComponent,
      HttpClientModule],
  templateUrl: './works-page-container.component.html',
  styleUrl: './works-page-container.component.scss'
})
export class WorksPageContainerComponent {
  private worksService = inject(WorksapiService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  /** 🔌 Configuration inputs */
  @Input() enableFilters = true;
  @Input() syncWithUrl = true;
  @Input() limit: number | null = null;

  /** State */
  industry = signal<string | null>(null);
  category = signal<string | null>(null);
  viewMode = signal<'grid' | 'list'>('grid');

  works = this.worksService.works;
  loading = this.worksService.loading;

  filteredWorks = computed(() => {
    let works = this.works();

    if (this.industry()) {
      works = works.filter(w => w.industry === this.industry());
    }

    if (this.category()) {
      works = works.filter(w => w.category === this.category());
    }

    if (this.limit) {
      works = works.slice(0, this.limit);
    }

    return works;
  });

  constructor() {
    this.worksService.loadWorks();

    if (this.syncWithUrl) {
      this.route.queryParams.subscribe(params => {
        this.industry.set(params['industry'] ?? null);
        this.category.set(params['category'] ?? null);
      });
    }
  }

  updateFilters(industry: string | null, category: string | null) {
    this.industry.set(industry);
    this.category.set(category);

    if (this.syncWithUrl) {
      this.router.navigate([], {
        queryParams: { industry, category },
        queryParamsHandling: 'merge'
      });
    }
  }
}