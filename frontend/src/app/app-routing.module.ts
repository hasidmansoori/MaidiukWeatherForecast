import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  
import { AscLayoutComponent } from './layouts/layout.component';

export const routes: Routes = [
  {
    path: '', 
    component: AscLayoutComponent 
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],

})
export class AppRoutingModule { }

