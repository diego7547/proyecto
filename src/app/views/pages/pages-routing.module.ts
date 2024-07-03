import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'country',loadChildren:()=>import('./countries/countries.module').then(m => m.CountriesModule)},
  {path:'user',loadChildren:()=>import('./user/user.module').then(m => m.UserModule)},
  {path:'home',loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
