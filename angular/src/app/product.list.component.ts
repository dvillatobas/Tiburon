import {Component}   from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';
import {ProductService} from './product.service';
import {UserService} from './user.service';
import {MensajesService} from './mensajes.service';

@Component({
  selector: 'product-list',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/product.list.component.html'
})

export class ProductListComponent{
  private products = this.pService.getProductList();
  private edit : boolean;
  private contact : boolean;

  constructor(
    private pService : ProductService,
    private uService : UserService,
    private router : Router,
    private mService : MensajesService
  ){
    if(this.router.hostComponent.name === 'BuscarComponent'){
      this.edit = false;
      this.contact = true;
    }else if(this.router.hostComponent.name === 'MisProductosComponent'){
      this.edit = true;
      this.contact = false;
    }
  }

  mensaje(){
    if(this.uService.getIdUserLogued()){
      this.router.navigate(['Mensajes']);
    }else{
      this.router.navigate(['Login']);
    }
  }
}
