import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
 
  {
    path: '', pathMatch: 'full', redirectTo: 'list-employee',
  },
    
  {
    path: 'menu', pathMatch: 'full', redirectTo: 'menu',

  },
  
//   {
//     path: 'edit-employee/:id', component: EditEmployeeComponent
//   },
//   {
//     path: 'js', component: JsComponent
//   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
