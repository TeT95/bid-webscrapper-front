import { Component, OnInit } from '@angular/core';
import { BiddingService } from '../bidding.service';
import { Bid } from '../bid';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bidding-list',
  templateUrl: './bidding-list.component.html',
  styleUrls: ['./bidding-list.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class BiddingListComponent implements OnInit {

  biddings: Bid[] = [];

  constructor(private biddingService: BiddingService) { }

  ngOnInit(): void {
    this.loadBiddings();
  }

  loadBiddings() {
    this.biddingService.getBiddings().subscribe(biddings => {
      this.biddings = biddings;
    });

    // const bidsJSON = '[{"object":"Computadores","isRead":true,"agency":"Secretaria de Educação","number":"123456/2023","publication":"2023-04-10","address":"Rua das Flores, 123","telephone":"(11) 98765-4321","proposalDelivery":"2023-04-25"},{"object":"Material de escritório","agency":"Departamento de Recursos Humanos","number":"654321/2023","publication":"2023-04-11","address":"Avenida Paulista, 500","telephone":"(21) 2345-6789","proposalDelivery":"2023-04-27"},{"object":"Mobiliário","agency":"Diretoria Financeira","number":"987654/2023","publication":"2023-04-12","address":"Rua dos Girassóis, 789","telephone":"(41) 3333-5555","proposalDelivery":"2023-04-29"}]'; // Replace with actual JSON string
    // const parsedBids: Bid[] = JSON.parse(bidsJSON);
    // this.biddings = parsedBids;
  }

  markAsRead(number: string) {
    this.biddingService.markAsRead(number).subscribe(() => {
      this.loadBiddings();
    });
  }
}
