import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BillComponent } from '../../components/bill/bill.component';
import { Bill } from '../../app.types';
import { BillsService } from '../../services/bills.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, BillComponent],
  providers: [BillsService],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit {
  bills?: Bill[];

  fetchBills() {
    this.billsService.getBills().subscribe((bills) => {
      this.bills = bills;
    });
  }
  onBillChange() {
    this.fetchBills();
  }
  constructor(private billsService: BillsService) {}
  ngOnInit(): void {
    this.fetchBills();
  }
}
