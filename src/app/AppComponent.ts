import { Component, OnInit } from '@angular/core';
import { ListProductsServiceService } from './productos/service/list-products-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Bienvenido a la primera fase, realizando un proyecto de frontend con Angular';
  users: any[] = [];
 

  constructor(
    protected ListProductsServiceService: ListProductsServiceService
    ) {

    }
  ngOnInit() {
    this.ListProductsServiceService.getProductos()
    .subscribe(
      (data) => {
        console.log(data)
        this.users =data['data.data'];
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
