import { map } from 'rxjs';
import { Flags } from './../../../../../../node_modules/apollo-angular/types.d';
import { Apollo } from 'apollo-angular';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { GET_COUNTRIES } from '../../../../grahpql.operation';
import { CountryService } from '../../../../core/service/country.service';
import {
  Country,
  DataCountries,
} from '../../../../core/models/dataContinentes';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrl: './country.component.css',
})
export class CountryComponent implements OnInit {
  dataCountries!: any[];
  @Input() paisesFiltro: string = '';
  @Input() continentesFiltro!: any[];

  enviarDatos(pais: Country) {
    
    this.router.navigate(['/countries/country/detalle'], { state: { pais } });


  }

  ngOnChanges() {
    this.apollo
      .watchQuery({
        query: GET_COUNTRIES,
      })
      .valueChanges.subscribe(({ data, error }: any) => {
        let continentNew: any;

        if (this.paisesFiltro !== undefined && this.paisesFiltro !== '') {
          if (
            this.continentesFiltro === undefined ||
            this.paisesFiltro !== ''
          ) {
            this.dataCountries = data.continents.map((c: any) => {
              let dataFiltrado = c.countries.filter((f: any) => {
                if (
                  f.name.toLowerCase().includes(this.paisesFiltro.toLowerCase())
                ) {
                  return f;
                }
              });

              let data = dataFiltrado.map((city: any) => {
                return {
                  capital: city.capital,
                  lenguaje: city.languages[0],
                  currency: city.currencies[0],
                  region: city.subdivisions,
                  name: city.name,
                  continent: city.continent.name,
                  flat: `https://flagcdn.com/w320/${city.code.toLowerCase()}.png`,
                };
              });

              return {
                country: data,
                continent: c.name,
              };
            });
          } else if (
            this.continentesFiltro !== undefined &&
            this.continentesFiltro.length > 0
          ) {
            let dataContinent = this.continentesFiltro.map((continent: any) => {
              let dataObtenido = data.continents.filter(
                ({ name }: any) => name === continent
              );
              return dataObtenido;
            });

            continentNew = dataContinent.filter((c: any) => c.length > 0);
            if (continentNew.length > 0) {
              this.dataCountries = continentNew.map((a: any) => {
                let dataFiltrado = a[0].countries.filter((f: any) => {
                  if (
                    f.name
                      .toLowerCase()
                      .includes(this.paisesFiltro.toLowerCase())
                  ) {
                    return f;
                  }
                });

                let data = dataFiltrado.map((city: any) => {
                  return {
                    capital: city.capital,
                    lenguaje: city.languages[0],
                    currency: city.currencies[0],
                    region: city.subdivisions,
                    name: city.name,
                    continent: city.continent.name,
                    flat: `https://flagcdn.com/w320/${city.code.toLowerCase()}.png`,
                  };
                });

                return {
                  country: data,
                  continent: a[0].name,
                };
              });
            } else {
              this.dataCountries = data.continents.map((c: any) => {
                let data = c.countries.map((city: any) => {
                  return {
                    capital: city.capital,
                    lenguaje: city.languages[0],
                    currency: city.currencies[0],
                    region: city.subdivisions,
                    name: city.name,
                    continent: city.continent.name,
                    flat: `https://flagcdn.com/w320/${city.code.toLowerCase()}.png`,
                  };
                });

                return {
                  country: data,
                  continent: c.name,
                };
              });
            }
          }
        } else if (this.continentesFiltro !== undefined) {
          let dataContinent = this.continentesFiltro.map((continent: any) => {
            let dataObtenido = data.continents.filter(
              ({ name }: any) => name === continent
            );
            return dataObtenido;
          });
          continentNew = dataContinent.filter((c: any) => c.length > 0);
          if (continentNew.length > 0) {
            this.dataCountries = continentNew.map((a: any) => {
              let data = a[0].countries.map((city: any) => {
                return {
                  capital: city.capital,
                  lenguaje: city.languages[0],
                  currency: city.currencies[0],
                  region: city.subdivisions,
                  name: city.name,
                  continent: city.continent.name,
                  flat: `https://flagcdn.com/w320/${city.code.toLowerCase()}.png`,
                };
              });

              return {
                country: data,
                continent: a[0].name,
              };
            });
          } else {
            this.dataCountries = data.continents.map((c: any) => {
              let data = c.countries.map((city: any) => {
                return {
                  capital: city.capital,
                  lenguaje: city.languages[0],
                  currency: city.currencies[0],
                  region: city.subdivisions,
                  name: city.name,
                  continent: city.continent.name,
                  flat: `https://flagcdn.com/w320/${city.code.toLowerCase()}.png`,
                };
              });

              return {
                country: data,
                continent: c.name,
              };
            });
          }
        } else {
          this.dataCountries = data.continents.map((c: any) => {
            let data = c.countries.map((city: any) => {
              return {
                capital: city.capital,
                lenguaje: city.languages[0],
                currency: city.currencies[0],
                region: city.subdivisions,
                name: city.name,
                continent: city.continent.name,
                flat: `https://flagcdn.com/w320/${city.code.toLowerCase()}.png`,
              };
            });

            return {
              country: data,
              continent: c.name,
            };
          });
        }
      });
  }

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: GET_COUNTRIES,
      })
      .valueChanges.subscribe(({ data, error }: any) => {
        this.dataCountries = data.continents.map((c: any) => {
          let data = c.countries.map((city: any) => {
            return {
              capital: city.capital,
              lenguaje: city.languages[0],
              currency: city.currencies[0],
              region: city.subdivisions,
              name: city.name,
              continent: city.continent.name,
              flat: `https://flagcdn.com/w320/${city.code.toLowerCase()}.png`,
            };
          });

          return {
            country: data,
            continent: c.name,
          };
        });
      });
  }

  constructor(
    private readonly apollo: Apollo,
    private readonly serviceCountry: CountryService,
    private readonly router:Router
  ) {}
}
