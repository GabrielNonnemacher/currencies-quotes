import { Component, EventEmitter, Output, signal } from '@angular/core';
import { URL_HELPER } from 'src/app/helpers/constants/url.constant';
import { ThemeMode } from 'src/app/helpers/enum/themeMode.enum';

@Component({
  selector: 'quote-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = signal<string>("Currencies Quotes");
  logo = signal<string>(URL_HELPER.icons.logoHeader);
  theme = signal<string>(ThemeMode.Light);
  themeLight = signal<string>(ThemeMode.Light);
  @Output() themeMode = new EventEmitter;

  public setThemeMode(param: string): void {
    this.theme.set(param);
    this.themeMode.emit(this.theme());
  }
}
