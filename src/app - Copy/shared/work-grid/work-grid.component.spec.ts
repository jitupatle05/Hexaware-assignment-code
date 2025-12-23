import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkGridComponent } from './work-grid.component';

describe('WorkGridComponent', () => {
  let component: WorkGridComponent;
  let fixture: ComponentFixture<WorkGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
