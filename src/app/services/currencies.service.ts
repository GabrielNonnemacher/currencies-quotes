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

  getConvertedLast(query: string) {
    return this.http.get<{ result: any }>(
      `${this.URL_BASE}/last/${query}`
    )
  }

  getCurrenciesMatches() {
    return this.http.get(`${this.URL_BASE}/xml/available`,{ responseType: 'text' });
  }
}
