import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksGridComponent } from './works-grid.component';

describe('WorksGridComponent', () => {
  let component: WorksGridComponent;
  let fixture: ComponentFixture<WorksGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorksGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorksGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
