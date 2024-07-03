import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {


  constructor(private http:HttpClient) { }

  getCountry(country:string){
    return this.http.get(`https://restcountries.com/v3.1/name/${country}?fullText=true
`)
  }
}
