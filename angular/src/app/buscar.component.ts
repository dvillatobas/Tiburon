import {Component}   from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';
import {Product, ProductService} from './product.service';

@Component({
  selector: 'main',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/buscar.component.html',


})

export class BuscarComponent{

  private products: Product[];
  private palabra: string;

  constructor(private pService : ProductService,private router : Router, routeParams: RouteParams){
      this.palabra = routeParams.get('palabra');
  }

  ngOnInit(){

    this.products = this.pService.getProductListSearch(this.palabra);
    
  }


}
