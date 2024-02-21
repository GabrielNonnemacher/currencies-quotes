import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'quote-button-clear',
  templateUrl: './clear.component.html',
  styleUrls: ['./clear.component.scss']
})
export class ClearComponent {
  @Output() clicked = new EventEmitter;

  public onClick(): void {
    this.clicked.emit();
  }
}
