import { Component, signal } from '@angular/core';
import { URL_HELPER } from 'src/app/helpers/constants/url.constant';

@Component({
  selector: 'quote-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = signal<string>("Currencies Quotes");
  logo = signal<string>(URL_HELPER.icons.logoHeader);
}
