import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'quote-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements AfterViewInit {

  @Input() value = 0;
  @Input() disabled = false;
  @Output() valueChange = new EventEmitter;
  @ViewChild('input', { static: true }) input!: ElementRef;

  ngAfterViewInit(): void {
    this.disable();
  }

  public onChange(valueChanged: any): void {
    this.value = valueChanged;
    this.valueChange.emit(this.value);
  }

  private disable(): void {
    this.input.nativeElement.disabled = this.disabled
  }
}
