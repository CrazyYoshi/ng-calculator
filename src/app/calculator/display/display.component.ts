import { Component, Input, OnInit } from '@angular/core';
import { Operation } from '@Interfaces/operation.interface';

@Component({
  selector: 'calculator-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent {
  @Input() currentOperation: Operation = {
    firstValue: undefined,
    operator: undefined,
    secondValue: undefined,
  };
}
