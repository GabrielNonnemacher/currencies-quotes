import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './components/header/header.component';
import { ButtonThemeModeComponent } from './components/buttons/button-theme-mode/button-theme-mode.component';
import { FooterComponent } from './components/footer/footer.component';
import { SelectComponent } from './components/inputs/select/select.component';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ScreenConversionComponent } from './components/screen-conversion/screen-conversion.component';
import { NumberComponent } from './components/inputs/number/number.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonThemeModeComponent,
    FooterComponent,
    SelectComponent,
    ScreenConversionComponent,
    NumberComponent
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
