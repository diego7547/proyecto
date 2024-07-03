import {
  Component,
  ContentChild,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { LayoutComponent } from '../../../layout/layout/layout.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.css',
})
export class CountriesComponent implements OnInit {
  formData!: FormGroup;
  continentes !:string[];
  estado = true;
  pais !:string;

  enviar() {
  this.pais = this.formData.get('pais')?.value
  console.log(this.pais)
  }

  filtro(){
    this.pais = this.formData.get('pais')?.value
  }

  getContinent(continent:string[]){
    this.continentes = continent;
  }

  isEstado() {
    this.estado =false;
  }

  initForm() {
    return this.fb.group({
      pais: [''],
    });
  }

  obtenerEstado(event:boolean){
    if(event){
      this.estado = false;
    }else{
      this.estado = true;
    }
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formData = this.initForm();
  }
}
