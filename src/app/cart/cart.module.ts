import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { TopDealsHeaderComponent } from '../components/top-deals-header/top-deals-header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';

@NgModule({
  declarations: [
    CartComponent,
    BookingDetailsComponent,
    OrderDetailsComponent,
    ConfirmOrderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    CartRoutingModule
  ],
  exports:[RouterModule],
  
})
export class CartModule { }
