import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonThemeModeComponent } from './components/buttons/button-theme-mode/button-theme-mode.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { InputNumberComponent } from './components/inputs/input-number/input-number.component';
import { SelectComponent } from './components/inputs/select/select.component';
import { ScreenConversionComponent } from './components/screen-conversion/screen-conversion.component';
import { CurrenciesService } from './services/currencies.service';
import { ServicesModule } from './services/services.module';
import { ComponentsModule } from './components/components.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ComponentsModule,
    ServicesModule
  ],
  providers: [
    CurrenciesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
