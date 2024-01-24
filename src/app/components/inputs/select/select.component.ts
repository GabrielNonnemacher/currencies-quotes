import { Component, Input } from '@angular/core';

@Component({
  selector: 'quote-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() items: any = [];
}
