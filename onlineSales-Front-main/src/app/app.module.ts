import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserRestService } from './services/userRest/user-rest.service';
import { ProductsComponent } from './components/products/products.component';
import { SearchPipe } from './pipes/search.pipe';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { EventComponent } from './components/event/event.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    NotFoundComponent,
    ProductsComponent,
    SearchPipe,
    ViewProductComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    UserRestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
