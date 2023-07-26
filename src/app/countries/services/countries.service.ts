import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/countries.interface';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private urlApi: string = 'https://restcountries.com/rest/v2';

  constructor(private http: HttpClient) {}

  get httpParams() {
    return new HttpParams().set(
      'fields',
      'name;capital;alpha2Code;flag;population'
    );
  }

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.urlApi}/name/${term}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  searchByCapital(term: string): Observable<Country[]> {
    const url = `${this.urlApi}/capital/${term}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  searchByRegion(region: string): Observable<Country[]> {
    const url = `${this.urlApi}/region/${region}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  getCountryByAlpha(id: string): Observable<Country> {
    const url = `${this.urlApi}/alpha/${id}`;
    return this.http.get<Country>(url);
  }
}
