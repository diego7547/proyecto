import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';

const routes: Routes = [
  {path:'',component:LayoutComponent,
    children:[
      {path:'',redirectTo:'countries',pathMatch:'full'},
      {path:'countries',loadChildren:()=>import('./views/pages/pages.module').then(m => m.PagesModule)}
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
