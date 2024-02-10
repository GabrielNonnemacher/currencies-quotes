import { Component, DestroyRef, OnInit, signal } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
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
    private service: CurrenciesService,
    private destroyRef: DestroyRef
  ) {}

  currencieInit = signal<Currencie>({} as Currencie);
  currencieFinal = signal<Currencie>({} as Currencie);
  currencieInitValue = signal<number>(0);
  currencieFinalValue = signal<number>(0);
  currenciesInit = signal<Currencie[]>([] as Currencie[]);
  currenciesFinal = signal<Currencie[]>([] as Currencie[]);
  allCurrencies = signal<Currencie[]>(NAME_CURRENCIES);
  allCurrenciesMatches = signal<string[]>([] as string[]);
  iconConvertion = signal<string>(URL_HELPER.icons.convertion);
  currencieTitleInit = signal<string>("Currencie to convert");
  currencieTitleFinal = signal<string>("Currencie converted");
  ngUnsubscribe = new Subject<void>();

  public ngOnInit(): void {
    this.setCurrenciesInit();
    this.getListMatches();
  }

  public currencieToConvert(): void {
    if (!this.currencieInit() || !this.currencieFinal()) return;

    this.service.getConvertedLast(this.currencieInit().acronym, this.currencieFinal().acronym)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((result) => {

        console.log(result);
        

      });
  }

  private setCurrenciesInit(): void {
    this.currenciesInit.set(
      this.allCurrencies()
    );
    this.currenciesFinal.set(
      this.allCurrencies()
    );
  }

  private filterCurrencies(param: Currencie, isFinal: boolean): void {
    if (!isFinal) {
      this.currenciesFinal.set(
        Functions.currenciesFiltereds(param.acronym, this.allCurrenciesMatches())
      );
    }
    
    this.currencieToConvert();
  }

  public changeValueCurrencie(param: number, isFinal: boolean): void {
    if (isFinal) {
      this.currencieFinalValue.set(param);
    } else {
      this.currencieInitValue.set(param);
    }

    this.currencieToConvert();
  }

  public changeToConvert(param: Currencie, isFinal: boolean): void {
    if (isFinal) {
      this.currencieFinal.set(param);
    } else {
      this.currencieInit.set(param);
    }

    this.filterCurrencies(param, isFinal);
  }

  public getListMatches(): void {
    this.service.getCurrenciesMatches()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((result) => {
        this.allCurrenciesMatches.set(
          Functions.extractXmlTags(result)
        );
      });
  }
}
