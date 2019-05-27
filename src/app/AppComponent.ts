import { Component } from '@angular/core';
import { ListProductsServiceService } from './productos/service/list-products-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienvenido a la primera fase, realizando un proyecto de frontend con Angular';
  public productos;
  constructor(private ListProductsServiceService: ListProductsServiceService) { }
  getProductos() {
    this.ListProductsServiceService.getProductos().subscribe(data => { this.productos = data; }, err => console.error(err), () => console.log('done loading foods'));
  }
  ngOnInit() {
    this.getProductos();
  }
}
