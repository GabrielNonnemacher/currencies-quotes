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
import { DirectivesModule } from '../directives/directives.module';
import { CurrenciesService } from '../services/currencies.service';
import { ButtonThemeModeComponent } from './buttons/button-theme-mode/button-theme-mode.component';
import { ClearComponent } from './buttons/clear/clear.component';
import { ConvertComponent } from './buttons/convert/convert.component';
import { GoHomeComponent } from './buttons/go-home/go-home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { InputNumberComponent } from './inputs/input-number/input-number.component';
import { SelectComponent } from './inputs/select/select.component';
import { ConversionComponent } from './screens/conversion/conversion.component';
import { NotFoundComponent } from './screens/not-found/not-found.component';
import { ScreenConversionComponent } from './screens/screen-conversion/screen-conversion.component';

@NgModule({
  declarations: [
    ButtonThemeModeComponent,
    FooterComponent,
    HeaderComponent,
    SelectComponent,
    InputNumberComponent,
    ScreenConversionComponent,
    NotFoundComponent,
    ConversionComponent,
    GoHomeComponent,
    ConvertComponent,
    ClearComponent
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
    HttpClientModule,
    DirectivesModule
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
    ScreenConversionComponent,
    NotFoundComponent,
    ConvertComponent
  ]
})
export class ComponentsModule {}
