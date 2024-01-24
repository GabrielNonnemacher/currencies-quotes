import { Component, signal } from '@angular/core';
import { URL_HELPER } from 'src/app/helpers/constants/url.constant';

@Component({
  selector: 'quote-screen-conversion',
  templateUrl: './screen-conversion.component.html',
  styleUrls: ['./screen-conversion.component.scss']
})
export class ScreenConversionComponent {
  iconConvertion = signal<string>(URL_HELPER.icons.convertion);
}
