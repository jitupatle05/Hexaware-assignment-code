import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksViewToggleComponent } from './works-view-toggle.component';

describe('WorksViewToggleComponent', () => {
  let component: WorksViewToggleComponent;
  let fixture: ComponentFixture<WorksViewToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorksViewToggleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorksViewToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
