import { Component, OnInit } from '@angular/core';
import { ListProductsServiceService } from '../service/list-products-service.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  constructor(private ListProductsServiceService:ListProductsServiceService) { }

  ngOnInit() {
  }

}
