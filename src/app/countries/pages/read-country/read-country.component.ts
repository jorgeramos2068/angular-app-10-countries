import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-read-country',
  templateUrl: './read-country.component.html',
})
export class ReadCountryComponent implements OnInit {
  public country!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap((params) =>
          this.countriesService.getCountryByAlpha(params.id)
        ),
        tap(console.log)
      )
      .subscribe({
        next: (country) => {
          this.country = country;
        },
      });
  }
}
