import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientQuoteComponent } from './client-quote.component';

describe('ClientQuoteComponent', () => {
  let component: ClientQuoteComponent;
  let fixture: ComponentFixture<ClientQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientQuoteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
