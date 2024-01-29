import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'quote-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() value?: string;
  @Input() title?: string;
  @Input() items: any = [];
  @Output() valueChange = new EventEmitter;

  public onSelect(): void {
    this.valueChange.emit(this.value);
  }
}
