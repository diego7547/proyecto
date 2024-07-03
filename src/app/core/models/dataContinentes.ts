import { Continent } from './../models/continents';

export interface DataContinent
{
  continente: string,estado:boolean ,data:string
}

export interface DataCountries{

  country:Country[],
  continent:string,

}

export interface Country
{
  city:string,
  name:string,
  flat:string,
  capital:string,
  lenguaje:string
  currency:string
  region:string,
  continent:string
  
}
