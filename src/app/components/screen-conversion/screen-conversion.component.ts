import { Component, OnInit, signal } from '@angular/core';
import { NAME_CURRENCIES } from 'src/app/helpers/constants/currencies.constant';
import { URL_HELPER } from 'src/app/helpers/constants/url.constant';
import { Functions } from 'src/app/helpers/functions/functions';
import { Currencie } from 'src/app/helpers/models/currencie.model';
import { CurrenciesService } from 'src/app/services/currencies.service';

@Component({
  selector: 'quote-screen-conversion',
  templateUrl: './screen-conversion.component.html',
  styleUrls: ['./screen-conversion.component.scss']
})
export class ScreenConversionComponent implements OnInit {

  constructor(
    private service: CurrenciesService
  ) {}

  currencieInit = signal<string>("");
  currencieFinal = signal<string>("");
  currenciesInit = signal<string[]>([]);
  currenciesFinal = signal<string[]>([]);
  allCurrencies = signal<Currencie[]>(NAME_CURRENCIES);
  iconConvertion = signal<string>(URL_HELPER.icons.convertion);
  currencieTitleInit = signal<string>("Currencie to convert");
  currencieTitleFinal = signal<string>("Currencie converted");


  cf = Functions.allAcronymsCurrencies();

  public ngOnInit(): void {
    console.log(this.cf);
    
    this.setCurrenciesFilter()
  }

  public currencieToConvert(param: string): void {
    console.log(param);

    this.service.getSite().subscribe((response) => {
      console.log(response)
    });
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
