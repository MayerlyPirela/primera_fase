import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListProductsServiceService {

  constructor(protected http:HttpClient) { }

  getProductos() {
   
    return this.http.get('https://testapi.io/api/hilderh/products/home');
  }
}
