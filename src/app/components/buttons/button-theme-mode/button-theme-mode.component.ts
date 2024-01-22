import { Component, EventEmitter, Output, signal } from '@angular/core';
import { URL_HELPER } from 'src/app/helpers/constants/url.constant';
import { ThemeMode } from 'src/app/helpers/enum/themeMode.enum';

@Component({
  selector: 'quote-button-theme-mode',
  templateUrl: './button-theme-mode.component.html',
  styleUrls: ['./button-theme-mode.component.scss']
})
export class ButtonThemeModeComponent {
  theme = signal<string>(ThemeMode.Light);
  icon = signal<string>(URL_HELPER.icons.themeDark);
  @Output() themeMode = new EventEmitter;

  public onClick(): void {
    this.theme.update(elem =>
      elem === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light
    );

    this.icon.set(
      this.theme() === ThemeMode.Light
        ? URL_HELPER.icons.themeDark
        : URL_HELPER.icons.themeLight
    );

    this.themeMode.emit(this.theme());
  }
}
