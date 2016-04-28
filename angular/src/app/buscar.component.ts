import {Component}   from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';
import {Product, ProductService} from './product.service';
import {ProductListComponent} from './product.list.component';
import {FiltroComponent} from './filtro.component';
import {UserService} from './user.service';
import {UserListComponent} from './user.list.component';

@Component({
  selector: 'main',
  directives: [ROUTER_DIRECTIVES, ProductListComponent,FiltroComponent,UserListComponent],
  templateUrl: 'app/buscar.component.html',


})

export class BuscarComponent{

  private products=[];
  private users=[];
  private palabra: string;

  constructor(
    private pService : ProductService,
    private router : Router,
    private routeParams: RouteParams,
    private uService : UserService
  ){
      this.palabra = this.routeParams.get('palabra');
      if(this.palabra[1]==='producto'){
        this.products = this.pService.getProductListSearch(this.palabra);
      }else{
        this.uService.getUserList().subscribe(
          l => this.users = l,
          error => console.log(error)
        );
      }

  }





}
