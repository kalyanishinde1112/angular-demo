import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { CartComponent } from './cart.component';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

const routes: Routes = [{ path: '', component: CartComponent },
{path:'booking-details',component:BookingDetailsComponent},
{path:'order',component:OrderDetailsComponent},
{path:'confirm-order',component:ConfirmOrderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
