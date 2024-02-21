import { Component, EventEmitter, Output, signal } from '@angular/core';
import { ThemeMode } from 'src/app/helpers/enum/themeMode.enum';

@Component({
  selector: 'quote-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent {
  theme = signal<string>(ThemeMode.Light);
  themeLight = signal<string>(ThemeMode.Light);
  @Output() themeMode = new EventEmitter;

  public setThemeMode(param: string): void {
    console.log(param);
    
    this.theme.set(param);
  }
}
