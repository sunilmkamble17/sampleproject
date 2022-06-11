import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/public/login/login.component';
import { ForgotPasswordComponent } from './modules/public/forgot-password/forgot-password.component';
import { SignupComponent } from './modules/public/signup/signup.component';
import { PublicComponent } from './modules/public/public.component';
import { SecureComponent } from './modules/secure/secure.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './modules/secure/dashboard/dashboard.component';
import { AddProductComponent } from './modules/secure/add-product/add-product.component';
import { DisplayProductComponent } from './modules/secure/display-product/display-product.component';
import { DisplayOrderComponent } from './modules/secure/display-order/display-order.component';
import { HeaderComponent } from './modules/layouts/header/header.component';
import { FooterComponent } from './modules/layouts/footer/footer.component';
import { SideNavComponent } from './modules/layouts/side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    SignupComponent,
    PublicComponent,
    SecureComponent,
    DashboardComponent,
    AddProductComponent,
    DisplayProductComponent,
    DisplayOrderComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
