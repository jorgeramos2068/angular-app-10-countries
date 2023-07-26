import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
})
export class ByCountryComponent {
  public term: string = '';
  public hasErrors: boolean = false;

  constructor(private countriesService: CountriesService) {}

  search() {
    this.hasErrors = false;
    this.countriesService.searchCountry(this.term).subscribe({
      next: (resp) => {
        console.log(resp);
      },
      error: (err) => {
        console.log(err);
        this.hasErrors = true;
      },
    });
  }
}
