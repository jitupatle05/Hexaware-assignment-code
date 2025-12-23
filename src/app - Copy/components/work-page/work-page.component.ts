import {
  Component,
  computed,
  effect,
  inject,
  signal
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';  
import { CommonModule } from '@angular/common';
import { WorksGridComponent } from './works-grid/works-grid.component';
import { WorksFiltersComponent } from './works-filters/works-filters.component';
import { WorksViewToggleComponent } from './works-view-toggle/works-view-toggle.component';
import { WorksapiService } from '../../services/worksapi.service';
import { Work } from '../../Models/work.model';
import { HttpClientModule } from '@angular/common/http';
import { WorksPageContainerComponent } from '../works-page-container/works-page-container.component';

@Component({
  selector: 'app-work-page',
  standalone: true,
  imports: [WorksPageContainerComponent],
  templateUrl: './work-page.component.html',
  styleUrls: ['./work-page.component.scss'],
  providers: [WorksapiService]
})
export class WorkPageComponent {
  
}