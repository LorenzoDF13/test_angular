import { Component, Input, OnInit } from '@angular/core';
import { ItemComponent } from '../../components/item/item.component';
import { CommonModule } from '@angular/common';
import { BillsService } from '../../services/bills.service';
import { Bill } from '../../app.types';

@Component({
  selector: 'app-bill-page',
  standalone: true,
  imports: [ItemComponent, CommonModule],
  templateUrl: './bill-page.component.html',
  styleUrl: './bill-page.component.css',
})
export class BillPageComponent implements OnInit {
  @Input() id!: number;
  bill?: Bill;
  total?: number;
  constructor(private billsService: BillsService) {}
  ngOnInit(): void {
    this.billsService.getBill(this.id).subscribe((bill) => {
      this.bill = bill;
      this.total =
        bill.items.reduce((acc, item) => acc + item.price * item.quantity, 0) -
        0.01;
    });
  }
}
