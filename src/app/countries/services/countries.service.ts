import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/countries.interface';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private urlApi: string = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) {}

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.urlApi}/name/${term}`;
    return this.http.get<Country[]>(url);
  }

  searchByCapital(term: string): Observable<Country[]> {
    const url = `${this.urlApi}/capital/${term}`;
    return this.http.get<Country[]>(url);
  }
}
