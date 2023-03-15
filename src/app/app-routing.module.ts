import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MedicineHomeComponent } from './components/medicine-home/medicine-home.component';
 
const routes: Routes = [
  
  {path:'home',component:HomeComponent},
  {path:'medicine-home',component:MedicineHomeComponent},
  // {path:'search',component:SearchComponent},

  
  {path:'**',redirectTo:'/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
