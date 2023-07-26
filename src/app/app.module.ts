import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CountriesModule } from './countries/countries.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, CountriesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
