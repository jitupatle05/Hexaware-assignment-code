import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksPageContainerComponent } from './works-page-container.component';

describe('WorksPageContainerComponent', () => {
  let component: WorksPageContainerComponent;
  let fixture: ComponentFixture<WorksPageContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorksPageContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorksPageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
