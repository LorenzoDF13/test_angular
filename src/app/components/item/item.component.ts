import { Component, Input } from '@angular/core';

import { CurrencyPipe, JsonPipe } from '@angular/common';
import { BillItem } from '../../app.types';
@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent {
  @Input() item!: BillItem;
}
