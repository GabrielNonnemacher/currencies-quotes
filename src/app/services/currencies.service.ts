import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {
  constructor(
    private http: HttpClient
  ) {}

  private readonly URL_BASE = " https://economia.awesomeapi.com.br";

  getSite() {
    return this.http.get<{ result: any }>(
      `${this.URL_BASE}/last/BRL-BTC`
    )
  }

  getCurrencies() {
    return this.http.get<{ result: XMLDocument }>(`${this.URL_BASE}/xml/available`);
  }
}
