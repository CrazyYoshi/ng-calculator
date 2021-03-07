import { Operator } from '@Enums/operator.enum';

export interface Operation {
  firstValue: number | undefined;
  operator: Operator | undefined;
  secondValue: number | undefined;
  result?: number;
}
