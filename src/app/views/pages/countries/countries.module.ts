import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesComponent } from './countries.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { CardComponent } from './card/card.component';
import {MatCardModule} from '@angular/material/card';
import { CountryComponent } from './country/country.component';
import { LayoutModule } from '@angular/cdk/layout';
import { BodyComponent } from './body/body.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    CountriesComponent,
    CardComponent,
    CountryComponent,
    BodyComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    LayoutModule,
    ReactiveFormsModule,
    MatIconModule,
    
  ]
})
export class CountriesModule { }
