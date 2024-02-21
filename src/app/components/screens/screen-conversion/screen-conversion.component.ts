import { Component, DestroyRef, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { Router } from '@angular/router';
import { catchError, of, Subject } from 'rxjs';
import { CURRENCIES } from 'src/app/helpers/constants/currencies.constants';
import { URL_HELPER } from 'src/app/helpers/constants/url.constant';
import { Conversion, ConversionDTO } from 'src/app/helpers/models/conversion.model';
import { Currencie, CurrencieDTO } from 'src/app/helpers/models/currencie.model';
import { InformationCurrencie, InformationCurrencieDTO } from 'src/app/helpers/models/informationCurrencie.model';
import { CurrenciesService } from 'src/app/services/currencies.service';

@Component({
  selector: 'quote-screen-conversion',
  templateUrl: './screen-conversion.component.html',
  styleUrls: ['./screen-conversion.component.scss']
})
export class ScreenConversionComponent implements OnInit {

  constructor(
    private service: CurrenciesService,
    private destroyRef: DestroyRef,
    private router: Router
  ) {}

  valueCurrencie = signal<number>(0);
  valueConversion = signal<Conversion>({} as Conversion);
  existsErrors = signal<boolean>(true);
  informations = signal<InformationCurrencie>({} as InformationCurrencie);
  currencieInit = signal<Currencie>({} as Currencie);
  currencieFinal = signal<Currencie>({} as Currencie);
  currenciesInit = signal<Currencie[]>([] as Currencie[]);
  currenciesFinal = signal<Currencie[]>([] as Currencie[]);
  allCurrencies = signal<Currencie[]>([] as Currencie[]);
  currencieTitleInit = signal<string>("Conversation from");
  currencieTitleFinal = signal<string>("To");
  iconConvertion = signal<string>(URL_HELPER.icons.convertion);
  ngUnsubscribe = new Subject<void>();

  public ngOnInit(): void {
    this.listCurrencies();
    this.getInfosAndDates();
  }

  public listCurrencies(): void {
    this.service.getCurrencies()
      .pipe(takeUntilDestroyed(this.destroyRef),
        catchError(() => of(undefined)))
      .subscribe((response) => {
        if (!response) {
          this.router.navigate(["**"]);
          return;
        } else {
          this.allCurrencies.set(response?.map(CurrencieDTO.mapperView));
          this.currenciesInit.set(this.allCurrencies());
          this.currenciesFinal.set(this.allCurrencies());
          this.disabledClear();
        }
      });
  }

  public changeValueCurrencie(param: number): void {
    this.valueCurrencie.set(param);

    this.disabledClear();
  }

  public changeCurrencie(param: Currencie, isFinal: boolean): void {
    if (!isFinal) {
      this.currencieInit.set(param);
      this.currenciesFinal.set(
        this.allCurrencies().filter((elem: Currencie) => elem !== this.currencieInit())
      );
    } else {
      this.currencieFinal.set(param);
      this.currenciesInit.set(
        this.allCurrencies().filter((elem: Currencie) => elem !== this.currencieFinal())
      );
    }
    this.disabledClear();
  }

  private disabledClear(): void {
    this.existsErrors.set(
      !this.currencieInit().codigo
      || !this.currencieFinal().codigo
      || (this.valueCurrencie() === 0)
    );
    this.toConvert();
  }

  public clearAll(): void {
    this.existsErrors.set(true);
    this.currencieInit.set({} as Currencie);
    this.currencieFinal.set({} as Currencie);
    this.currenciesInit.set([]);
    this.currenciesFinal.set([]);
    this.valueCurrencie.set(0);
    this. valueConversion.set({} as Conversion);
    this.listCurrencies();
  }

  public toConvert(): void {
    if (this.existsErrors()) return;

    this.service.getConversion(this.valueCurrencie(), this.currencieInit().codigo, this.currencieFinal().codigo, this.informations().data)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((response) => {
        this.valueConversion.set(ConversionDTO.mapperView(response));
      });
  }

  private getInfosAndDates(): void {
    const date = new Date();
    const dateResponse = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`

    this.service.getInformations(dateResponse)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((response) => {
        this.informations.set(InformationCurrencieDTO.mapperDto(response));
      });
  }
}
