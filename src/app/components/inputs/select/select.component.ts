import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Currencie } from 'src/app/helpers/models/currencie.model';

@Component({
  selector: 'quote-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() value?: Currencie;
  @Input() title?: string;
  @Input() items: Currencie[] = [] as Currencie[];
  @Output() valueChange = new EventEmitter;

  public onSelect(): void {
    this.valueChange.emit(this.value);
  }
}
