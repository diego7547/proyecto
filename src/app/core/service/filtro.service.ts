import { Injectable } from '@angular/core';
import { Observable } from '@apollo/client';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltroService {

  constructor(private readonly apollo:Apollo) { }

  getCountries(continent: string, countryName: string) {
    const GET_COUNTRIES = gql`
      query GetCountries($continent: String!, $countryName: String!) {
        countries(filter: { continent: { eq: $continent }, name: { regex: $countryName } }) {
          code
          name
          continent {
            name
          }
        }
      }
    `;

    return this.apollo
      .watchQuery({
        query: GET_COUNTRIES,
        variables: {
          continent,
          countryName: countryName ? `.*${countryName}.*` : '',
        },
      })
      .valueChanges.pipe(map((result: any) => result.data.countries));
  }
}
