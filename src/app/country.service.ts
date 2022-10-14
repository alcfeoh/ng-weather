import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface ICountry {
  name: {
    common: string;
  },
  cca2: string;
}

@Injectable()
export class CountryService {
  constructor(private http: HttpClient) { }

  searchCountries(query: string): Observable<ICountry[]> {
    const searchSegment = query?.length > 0 ? `name/${query}` : 'all'

    return this.http.get<ICountry[]>(`https://restcountries.com/v3.1/${searchSegment}`).pipe(
      catchError(({ status }) => {
        if (status === 404) {
          return of([]);
        }
      }),
    );
  }
}
