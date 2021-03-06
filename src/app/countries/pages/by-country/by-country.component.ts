import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
})
export class ByCountryComponent {
  public term: string = '';
  public hasErrors: boolean = false;
  public countries: Country[] = [];
  public suggestedCountries: Country[] = [];
  public showSuggested: boolean = false;

  constructor(private countriesService: CountriesService) {}

  search(localTerm: string): void {
    this.term = localTerm;
    this.hasErrors = false;
    this.showSuggested = false;
    this.countriesService.searchCountry(this.term).subscribe({
      next: (respCountries: Country[]) => {
        this.countries = respCountries;
      },
      error: (err) => {
        console.log(err);
        this.hasErrors = true;
        this.countries = [];
      },
    });
  }

  doSuggestions(localTerm: string): void {
    if (localTerm !== '') {
      this.term = localTerm;
      this.hasErrors = false;
      this.showSuggested = true;
      this.countriesService.searchCountry(localTerm).subscribe({
        next: (countries) => {
          this.suggestedCountries = countries.splice(0, 5);
        },
        error: (err) => {
          this.hasErrors = true;
          this.suggestedCountries = [];
          this.showSuggested = false;
          console.log(err);
        },
      });
    } else {
      this.suggestedCountries = [];
      this.showSuggested = false;
    }
  }
}
