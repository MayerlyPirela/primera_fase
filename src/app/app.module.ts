import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from "./AppComponent";
import { ProductosComponent } from './productos/productos.component';
import { ListProductsComponent } from './productos/list-products/list-products.component';
import { NavbarComponent } from './navbar.component';
import { ListProductsServiceService } from './productos/service/list-products-service.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ListProductsComponent,
    NavbarComponent,
    
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
    
    
  ],
  providers: [ListProductsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
