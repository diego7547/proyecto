import { Component, Input, ViewChild, viewChild } from '@angular/core';
import {dataLogin} from '../../core/utils/dataNavbar';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrl: './nabvar.component.css'
})
export class NabvarComponent {
  collapse = false;
  navData = dataLogin;

  @Input()
  sidenav!:MatSidenav;
}
