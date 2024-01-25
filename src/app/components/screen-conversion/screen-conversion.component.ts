import { Component, OnInit, signal } from '@angular/core';
import { NAME_CURRENCIES } from 'src/app/helpers/constants/currencies.constant';
import { URL_HELPER } from 'src/app/helpers/constants/url.constant';
import { Currencie } from 'src/app/helpers/models/currencie.model';

@Component({
  selector: 'quote-screen-conversion',
  templateUrl: './screen-conversion.component.html',
  styleUrls: ['./screen-conversion.component.scss']
})
export class ScreenConversionComponent implements OnInit {
  iconConvertion = signal<string>(URL_HELPER.icons.convertion);
  currenciesInit = signal<string[]>([]);
  currenciesFinal = signal<string[]>([]);
  allCurrencies = signal<Currencie[]>(NAME_CURRENCIES);

  public ngOnInit(): void {
    this.setCurrenciesFilter()
  }

  private setCurrenciesFilter(): void {
    this.allCurrencies()?.forEach((currencie: Currencie) => {
      this.currenciesInit.update(fullname =>
        [...fullname, currencie.fullName]
      );
      this.currenciesFinal.update(fullname =>
        [...fullname, currencie.fullName]
      );
    });
  }

  public changeValueInit(param: number): void {
    console.log(param);
    
  }
}
