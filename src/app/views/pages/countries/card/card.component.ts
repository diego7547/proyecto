import { Continent } from './../../../../core/models/continents';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GET_CONTINENTS } from '../../../../grahpql.operation';
import { Apollo } from 'apollo-angular';
import { DataContinent } from '../../../../core/models/dataContinentes';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{

  @Output() estado =new EventEmitter<boolean>;
  @Output() continents = new EventEmitter<string[]>;
  ngOnInit(): void {
    this.apollo.watchQuery({
      query:GET_CONTINENTS
    }).valueChanges.subscribe(({data,error}:any) =>{

      this.dataContinentes = data.continents.map((c:any) => {
        return {
          continente:c.name,
          estado:false,
          data:`../../../assets/${c.name}.png`
        }
      });
    });
  }
  nameContinent:string[] = [];

  dataContinentes!:DataContinent[];



  activeContinente(item:number){

      this.dataContinentes =  this.dataContinentes.map((continente,index) =>
      {
        if(index === item) {
          continente.estado = !continente.estado;
        }
        return continente;
      }
      );
      let dataEstado= this.dataContinentes.find(c => c.estado !== false);

      let dataContinent = this.dataContinentes.map((c ):string=>{
        if(c.estado === true) return c.continente;
        return '';
      });
      this.estado.emit(dataEstado?.estado || false);
      this.continents.emit(dataContinent);

    }

    filtroEnable(){
      this.dataContinentes =  this.dataContinentes.map(c => {
        c.estado = false;
        return c;
      })
      this.estado.emit(false);

      }

      constructor(private readonly apollo:Apollo){}
}
