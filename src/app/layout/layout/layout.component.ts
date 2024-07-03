import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import{BreakpointObserver} from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  @ViewChild(MatSidenav)
  sidenav!:MatSidenav;
  
  dataNow = new Date();

  constructor(private observer:BreakpointObserver,private cd:ChangeDetectorRef){

  }

  ngAfterViewInit(){
    this.observer.observe(['(max-width: 1270px)']).subscribe(res => {
      if(res.matches){
        this.sidenav.mode='over';
        this.sidenav.close();
      }else{
        this.sidenav.mode='side';
        this.sidenav.open();

      }
    });
    this.cd.detectChanges();
  }
}
