import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
})
export class ByCapitalComponent {
  public term: string = '';
  public hasErrors: boolean = false;
  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  search(localTerm: string): void {
    this.term = localTerm;
    this.hasErrors = false;
    this.countriesService.searchByCapital(this.term).subscribe({
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
}
