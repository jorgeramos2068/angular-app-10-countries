import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
})
export class ByRegionComponent {
  public regions: string[] = [
    'africa',
    'americas',
    'asia',
    'europe',
    'oceania',
  ];
  public activeRegion: string = '';
  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  getCSSClass(region: string): string {
    return region === this.activeRegion
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  activateRegion(region: string): void {
    if (region === this.activeRegion) {
      return;
    }
    this.activeRegion = region;
    this.countries = [];
    this.countriesService.searchByRegion(this.activeRegion).subscribe({
      next: (respCountries: Country[]) => {
        this.countries = respCountries;
      },
      error: (err) => {
        console.log(err);
        this.countries = [];
      },
    });
  }
}
