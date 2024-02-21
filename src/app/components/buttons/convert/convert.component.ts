import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'quote-button-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.scss']
})
export class ConvertComponent {
  @Output() clicked = new EventEmitter;

  public onClick(): void {
    this.clicked.emit();
  }
}
