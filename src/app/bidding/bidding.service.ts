import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bid } from './bid';

@Injectable({
  providedIn: 'root',
})
export class BiddingService {

  private baseUrl = 'http://localhost:8080/bidding';

  constructor(private http: HttpClient) { }

  getBiddings(): Observable<Bid[]> {
    return this.http.get<Bid[]>(this.baseUrl);
  }

  markAsRead(number: string): Observable<Bid> {
    return this.http.put<Bid>(`${this.baseUrl}/${number}`, {});
  }
}
