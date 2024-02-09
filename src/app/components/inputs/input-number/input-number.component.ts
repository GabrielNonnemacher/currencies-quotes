import { Component, EventEmitter, Output, signal } from '@angular/core';

@Component({
  selector: 'quote-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent {
  value = 0;
  @Output() valueChange = new EventEmitter;

  public onChange(valueChanged: any): void {
    this.value = valueChanged * 1;
    this.valueChange.emit(this.value);
  }

  public f(): number {
    return this.value
  }
}