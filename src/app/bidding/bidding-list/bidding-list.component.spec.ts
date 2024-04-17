import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiddingListComponent } from './bidding-list.component';

describe('BiddingListComponent', () => {
  let component: BiddingListComponent;
  let fixture: ComponentFixture<BiddingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiddingListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BiddingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
