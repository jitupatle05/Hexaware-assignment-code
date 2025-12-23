import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksFiltersComponent } from './works-filters.component';

describe('WorksFiltersComponent', () => {
  let component: WorksFiltersComponent;
  let fixture: ComponentFixture<WorksFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorksFiltersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorksFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
