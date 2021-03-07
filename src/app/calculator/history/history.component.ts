import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Operation } from '@Interfaces/operation.interface';

@Component({
  selector: 'calculator-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent {
  @Input() operations: Operation[] = [];
  @Output() selectedOperation: EventEmitter<Operation> = new EventEmitter();

  emitOperation(op: Operation): void {
    this.selectedOperation.emit(op);
  }
}
