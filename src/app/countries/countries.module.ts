import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { ReadCountryComponent } from './pages/read-country/read-country.component';

@NgModule({
  declarations: [
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    ReadCountryComponent,
  ],
  imports: [CommonModule],
  exports: [
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    ReadCountryComponent,
  ],
})
export class CountriesModule {}
