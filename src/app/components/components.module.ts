import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CurrenciesService } from '../services/currencies.service';
import { ButtonThemeModeComponent } from './buttons/button-theme-mode/button-theme-mode.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { InputNumberComponent } from './inputs/input-number/input-number.component';
import { SelectComponent } from './inputs/select/select.component';
import { ScreenConversionComponent } from './screen-conversion/screen-conversion.component';



@NgModule({
  declarations: [
    ButtonThemeModeComponent,
    FooterComponent,
    HeaderComponent,
    SelectComponent,
    InputNumberComponent,
    ScreenConversionComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CurrenciesService
  ],
  exports: [
    ButtonThemeModeComponent,
    FooterComponent,
    HeaderComponent,
    SelectComponent,
    InputNumberComponent,
    ScreenConversionComponent
  ]
})
export class ComponentsModule {}
