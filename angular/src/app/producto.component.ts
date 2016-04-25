import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';
import {UserService,User} from './user.service';
import {Product, ProductService} from './product.service';

@Component({
  selector: 'main',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/producto.component.html'

})

export class ProductoComponent{
  private product : Product;
  private user : User;
  private error : boolean = false;
  constructor(
    private router:Router,
    private routeParams : RouteParams,
    private uService : UserService,
    private pService : ProductService
  ){
    let id = +this.routeParams.get('id');
    if(this.pService.exist(id)){
      this.product = this.pService.getProduct(+this.routeParams.get('id'));
      this.user = this.uService.getUser(this.product.idUser);
    }else{
      this.error = true;
    }

  }


  volver(){
    window.history.back();
  }
  mensaje(){
    this.router.navigate(['Mensajes']);
  }
}
