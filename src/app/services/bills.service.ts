import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from '../app.types';

@Injectable({
  providedIn: 'root',
})
export class BillsService {
  baseUrl = 'http://144.126.246.64:3001';
  constructor(private http: HttpClient) {}
  getBills(): Observable<Bill[]> {
    return this.http.get(this.baseUrl + '/bills') as Observable<Bill[]>;
  }
  getBill(id: number): Observable<Bill> {
    return this.http.get(this.baseUrl + '/bills/' + id) as Observable<Bill>;
  }
  addBill(bill: Bill): Observable<Bill> {
    return this.http.post(this.baseUrl + '/bills', bill) as Observable<Bill>;
  }
  deleteBill(id: number): Observable<Bill> {
    return this.http.delete(this.baseUrl + '/bills/' + id) as Observable<Bill>;
  }
}
