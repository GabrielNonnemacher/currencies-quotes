import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrenciesService } from './currencies.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    CurrenciesService
  ],
  exports: []
})
export class ServicesModule { }
