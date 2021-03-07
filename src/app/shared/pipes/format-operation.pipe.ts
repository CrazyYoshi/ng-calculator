import { Pipe, PipeTransform } from '@angular/core';
import { Operator } from '@Enums/operator.enum';
import { Operation } from '@Interfaces/operation.interface';

@Pipe({
  name: 'formatOperation',
})
export class FormatOperationPipe implements PipeTransform {
  transform(value: Operation): string | null {
    switch (value.operator) {
      case Operator.Add:
        return `${value.firstValue} + ${value.secondValue} = ${value.result}`;
      case Operator.Substract:
        return `${value.firstValue} - ${value.secondValue} = ${value.result}`;
      case Operator.Multiply:
        return `${value.firstValue} x ${value.secondValue} = ${value.result}`;
      case Operator.Divide:
        return `${value.firstValue} ÷ ${value.secondValue} = ${value.result}`;
      default:
        return null;
    }
  }
}
