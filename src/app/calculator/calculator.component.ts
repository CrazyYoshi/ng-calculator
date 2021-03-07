import { Component } from '@angular/core';
import { NumpadKey } from '@Enums/numpad-key.enum.ts';
import { Operator } from '@Enums/operator.enum';
import { Operation } from '@Interfaces/operation.interface';
import { _isNumber } from '@Shared/helpers/_misc-methods.helper';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  val1: number | undefined;
  val2: number | undefined;
  input = '';
  operator: Operator | undefined;
  lastKey: NumpadKey | undefined;

  operations: Operation[] = [];

  get Display(): Operation {
    return {
      firstValue: this.val1,
      secondValue: parseFloat(this.input) || undefined,
      operator: this.operator,
    };
  }
  keySwitch(key: NumpadKey): void {
    //If number
    if (_isNumber(key)) {
      if (!(this.input === '' && key === NumpadKey.N0)) this.input += key;
    }
    //if operator
    else if (this.isKeyOperator(key) && (this.val1 || this.input !== '')) {
      this.switchOperator(key);
    }
    // other functions
    else {
      switch (key) {
        case NumpadKey.Negate:
          this.input = this.negate(this.input);
          break;
        case NumpadKey.Backspace:
          this.input = this.input.slice(0, -1);
          break;
        case NumpadKey.Delete:
          this.input = '';
          break;
        case NumpadKey.Escape:
          this.clear();
          break;
        case NumpadKey.Decimal:
          if (!this.input.includes(NumpadKey.Decimal.toString())) {
            if (this.input === '') this.input = '0';
            this.input += key.toString();
          }
          break;
        case NumpadKey.Equal:
        case NumpadKey.Enter:
          this.execute();
          break;
      }
    }
    this.lastKey = key;
  }
  switchOperator(key: NumpadKey): void {
    this.val2 = this.val1 ? parseFloat(this.input) || undefined : undefined;
    this.val1 = this.val1 ?? (parseFloat(this.input) || undefined);
    this.operator = this.operator ?? ((key as unknown) as Operator);
    if (this.val1 && this.val2 && !this.isKeyOperator(this.lastKey)) {
      this.execute();
    } else if (this.val1 && this.input !== '') this.input = '';
    this.operator = (key as unknown) as Operator;
  }
  execute(): void {
    this.val2 = this.val2 ?? (parseFloat(this.input) || undefined);
    if (this.val1 && this.val2 && this.operator) {
      const currentCalcul: Operation = {
        firstValue: this.val1,
        secondValue: this.val2,
        operator: this.operator,
      };
      switch (this.operator) {
        case Operator.Add:
          this.val1 = this.val1 + this.val2;
          break;
        case Operator.Substract:
          this.val1 = this.val1 - this.val2;
          break;
        case Operator.Multiply:
          this.val1 = this.val1 * this.val2;
          break;
        case Operator.Divide:
          this.val1 = this.val1 / this.val2;
          break;
      }
      currentCalcul.result = this.val1;
      this.val1 = this.val1 !== 0 ? this.val1 : undefined;
      this.operations.push(currentCalcul);
      this.input = '';
      this.operator = undefined;
      this.val2 = undefined;
    }
  }
  negate(inputString: string): string;
  negate(inputNumber: number): number;
  negate(input: string | number): string | number {
    const negated = (parseFloat(input as string) || 0) * -1;
    if (typeof input === 'string') {
      if (negated > 0 || negated < 0) return negated.toString();
      else return input.includes('-') ? '' : '-';
    } else {
      return negated;
    }
  }
  clear(): void {
    this.input = '';
    this.val1 = undefined;
    this.val2 = undefined;
    this.operator = undefined;
  }
  isKeyOperator(key: NumpadKey | undefined): boolean {
    return key ? Object.values(Operator).includes(key) : false;
  }
  selectedHistoryOperation(operation: Operation): void {
    this.input = operation.result?.toString() || '';
  }
