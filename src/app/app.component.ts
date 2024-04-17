import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BiddingListComponent } from './bidding/bidding-list/bidding-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BiddingListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'webscrapper-front';
}
