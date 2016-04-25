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
      this.pService.getProductById(+this.routeParams.get('id')).subscribe(
        prod => {
          this.product = prod
        },
        error => {
          console.log(error);
        }
      );
      this.uService.getUser(this.product.idUser).subscribe(
        usr => this.user = usr,
        error => console.log(error)
      );
    }else{
      this.error = true;
    }

  }


  volver(){
    window.history.back();
  }
  mensaje(){
    if(this.uService.getIdUserLogued()!=this.user.id){
      this.router.navigate(['Mensajes', {id:this.user.id}]);
    }
  }
}
