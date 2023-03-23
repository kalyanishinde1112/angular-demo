import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MedicineHomeComponent } from './components/medicine-home/medicine-home.component';
import { TopDealByCategroyComponent } from './components/top-deal-by-categroy/top-deal-by-categroy.component';
import { TopDealsHeaderComponent } from './components/top-deals-header/top-deals-header.component';

import { ViewProductDetailsComponent } from './components/view-product-details/view-product-details.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
 
const routes: Routes = [
  
  {path:'home',component:HomeComponent},
  {path:'medicine-home',component:MedicineHomeComponent},
  {path:'top-deals-by-category',component:TopDealByCategroyComponent},
  // {path:'search',component:SearchComponent},
  {path:"view-product-details/:drugCode",component:ViewProductDetailsComponent},
{path:"top-deals-header",component:TopDealsHeaderComponent},

  {path:'',redirectTo:'/home',pathMatch:'full'},
  
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
