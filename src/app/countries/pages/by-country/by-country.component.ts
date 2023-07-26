import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
})
export class ByCountryComponent {
  public term: string = '';

  constructor(private countriesService: CountriesService) {}

  search() {
    this.countriesService.searchCountry(this.term).subscribe((resp) => {
      console.log(resp);
    });
  }
}
