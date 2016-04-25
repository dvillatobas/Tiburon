import {Component}   from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';
import {Product, ProductService} from './product.service';
import {ProductListComponent} from './product.list.component';

@Component({
  selector: 'main',
  directives: [ROUTER_DIRECTIVES, ProductListComponent],
  templateUrl: 'app/buscar.component.html',


})

export class BuscarComponent{

  private products=[];
  private palabra: string;

  constructor(
    private pService : ProductService,
    private router : Router,
    routeParams: RouteParams
  ){
      this.palabra = routeParams.get('palabra');
      //this.products = this.pService.getProductListSearch(this.palabra);
  }


}
