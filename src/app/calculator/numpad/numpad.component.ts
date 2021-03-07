import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { NumpadKey } from '@Enums/numpad-key.enum.ts';
import { _isNumber } from '@Shared/helpers/_misc-methods.helper';

@Component({
  selector: 'calculator-numpad',
  templateUrl: './numpad.component.html',
  styleUrls: ['./numpad.component.scss'],
})
export class NumpadComponent {
  keyEnum = NumpadKey;
  isNumber = _isNumber;

  keyPad = [
    { key: NumpadKey.Negate.toString(), value: NumpadKey.Negate },
    { key: 'CE', value: NumpadKey.Escape },
    { key: 'C', value: NumpadKey.Delete },
    { key: '⌫', value: NumpadKey.Backspace },
    { key: NumpadKey.N7.toString(), value: NumpadKey.N7 },
    { key: NumpadKey.N8.toString(), value: NumpadKey.N8 },
    { key: NumpadKey.N9.toString(), value: NumpadKey.N9 },
    { key: NumpadKey.Multiply.toString(), value: NumpadKey.Multiply },
    { key: NumpadKey.N4.toString(), value: NumpadKey.N4 },
    { key: NumpadKey.N5.toString(), value: NumpadKey.N5 },
    { key: NumpadKey.N6.toString(), value: NumpadKey.N6 },
    { key: NumpadKey.Substract.toString(), value: NumpadKey.Substract },
    { key: NumpadKey.N1.toString(), value: NumpadKey.N1 },
    { key: NumpadKey.N2.toString(), value: NumpadKey.N2 },
    { key: NumpadKey.N3.toString(), value: NumpadKey.N3 },
    { key: NumpadKey.Add.toString(), value: NumpadKey.Add },
    { key: NumpadKey.Decimal.toString(), value: NumpadKey.Decimal },
    { key: NumpadKey.N0.toString(), value: NumpadKey.N0 },
    { key: NumpadKey.Equal.toString(), value: NumpadKey.Equal },
    { key: NumpadKey.Divide.toString(), value: NumpadKey.Divide },
  ];

  @Output() keyPress: EventEmitter<NumpadKey> = new EventEmitter();

  @HostListener('window:keyup', ['$event']) keyEvent(
    event: KeyboardEvent
  ): void {
    if (Object.values(NumpadKey).includes(event.key as NumpadKey)) {
      this.emitInput(event.key as NumpadKey);
    }
  }

  emitInput(key: NumpadKey): void {
    this.keyPress.emit(key);
  }
}
