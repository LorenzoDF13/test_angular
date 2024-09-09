import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';

import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Bill } from '../../app.types';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { BillsService } from '../../services/bills.service';

@Component({
  selector: 'app-bill',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './bill.component.html',
  styleUrl: './bill.component.css',
})
export class BillComponent {
  private modalService = inject(NgbModal);
  constructor(private billsService: BillsService) {}
  @Input() bill!: Bill;
  @Output() onDelete = new EventEmitter<void>();
  open() {
    this.modalService
      .open(ConfirmModalComponent, { ariaLabelledBy: 'modal-basic-title' })
      .result.then((result) => {
        console.log(result);
        if (result) {
          this.billsService.deleteBill(this.bill.id).subscribe(() => {
            this.onDelete.emit();
          });
        }
      });
  }
}
