import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../../../core/models/dataContinentes';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent implements OnInit{
  pais!:Country;
  lenguaje :any= "";
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {

   this.pais =  history.state.pais
    this.lenguaje = this.pais.lenguaje;


  }
}
