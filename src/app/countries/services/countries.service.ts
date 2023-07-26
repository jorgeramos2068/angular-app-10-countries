import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private urlApi: string = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) {}

  searchCountry(term: string): Observable<any> {
    const url = `${this.urlApi}/name/${term}`;
    return this.http.get(url);
  }
}
