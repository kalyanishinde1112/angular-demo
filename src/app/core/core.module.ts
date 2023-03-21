import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from '../components/sign-in/sign-in.component';
import { SignUpComponent } from '../components/sign-up/sign-up.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    SignInComponent,
    SignUpComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent
  ]
})
export class CoreModule {
  
 }
