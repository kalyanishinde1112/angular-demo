import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CoreModule } from "./core/core.module";
import { MedicineHomeComponent } from './components/medicine-home/medicine-home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { config } from 'rxjs';
import { TopDealsComponent } from './components/top-deals/top-deals.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TopDealByCategroyComponent } from './components/top-deal-by-categroy/top-deal-by-categroy.component';
import { TopDealsHeaderComponent } from './components/top-deals-header/top-deals-header.component';
import { ViewProductDetailsComponent } from './components/view-product-details/view-product-details.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
 
@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        MedicineHomeComponent,
        TopDealsComponent,
        TopDealByCategroyComponent,
        TopDealsHeaderComponent,
        ViewProductDetailsComponent,
        TopHeaderComponent,
       
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        CarouselModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
   exports: [FormsModule, ReactiveFormsModule,RouterModule,TopDealsHeaderComponent]
})
export class AppModule { }
