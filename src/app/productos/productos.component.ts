import { Component, OnInit } from '@angular/core';
import { ListProductsServiceService } from './service/list-products-service.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  

  constructor(private ListProductsServiceService:ListProductsServiceService) { }

  ngOnInit() {
  }

}
