import {Component}   from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';
import {Product,ProductService} from './product.service';
import {UserService} from './user.service';
import {MensajesService} from './mensajes.service';

@Component({
  selector: 'product-list',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/product.list.component.html'
})

export class ProductListComponent{
  private products: Product[];
  private edit : boolean;
  private contact : boolean;

  constructor(
    private pService : ProductService,
    private uService : UserService,
    private router : Router,
    routeParams: RouteParams,
    private mService : MensajesService
  ){
    if(this.router.hostComponent.name === 'BuscarComponent'){
      this.products = this.pService.getProductList();
      this.edit = false;
      this.contact = true;
    }else if(this.router.hostComponent.name === 'MisProductosComponent'){
      this.products = this.pService.getProductListUser(this.uService.getIdUserLogued());
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

  editar(idProduct:number | string){

    this.router.navigate(['EditarProducto',{id: idProduct}]);
  }

  borrar(idProduct:number | string){
    let confirm = window.confirm("¿Estas seguro de que deseas borrar este producto?");
    if (confirm){
      this.pService.deleteProduct(idProduct).subscribe(
        _ => this.router.navigate(['MisProductos']),
        error => console.log(error)
      )
    }

  }
}
