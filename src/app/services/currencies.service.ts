import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conversion } from '../helpers/models/conversion.model';
import { Currencie } from '../helpers/models/currencie.model';
import { InformationCurrencie } from '../helpers/models/informationCurrencie.model';

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {
  constructor(
    private http: HttpClient
  ) {}

  private readonly URL_BASE = "https://www3.bcb.gov.br/bc_moeda/rest";

  getCurrencies(): Observable<Currencie[]> {
    return this.http.get<Currencie[]>(`${this.URL_BASE}/moeda/data`);
  }

  getInformations(date: string): Observable<InformationCurrencie> {
    return this.http.get<InformationCurrencie>(`${this.URL_BASE}/cotacao/fechamento/ultima/1/220/${date}`);
  }

  getConversion(value: number, firsCode: number, lastCode: number, date: string): Observable<Conversion> {
    return this.http.get<Conversion>(`${this.URL_BASE}/converter/${value}/1/${firsCode}/${lastCode}/${date}`);
  }
}
