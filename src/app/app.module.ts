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
@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        MedicineHomeComponent,
        TopDealsComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        CarouselModule,
        BrowserAnimationsModule
        
         
        
    ]
})
export class AppModule { }
