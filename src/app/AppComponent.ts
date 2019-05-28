import { Component, OnInit } from '@angular/core';
import { ListProductsServiceService } from './productos/service/list-products-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Bienvenido a la primera fase, realizando un proyecto de frontend con Angular';
  user: any[] = [];
 
  constructor(
    protected ListProductsServiceService: ListProductsServiceService
    ) {

    }
  ngOnInit() {
    this.ListProductsServiceService.getProductos()
    .subscribe(
      (data) => {
        
        this.user =Object.values(data)[1];
console.log(this.user)
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
