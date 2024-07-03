import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { NabvarComponent } from './nabvar/nabvar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from '../app-routing.module';



import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';



import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [


    LayoutComponent,
         NabvarComponent,

  ],
  imports: [
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    AppRoutingModule,

    NgbModule,


  ],
  exports:[
    NabvarComponent
  ]
})
export class LayoutModule { }
