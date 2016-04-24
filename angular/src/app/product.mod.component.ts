import {Component}   from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';
import {ProductService, Product} from './product.service';

@Component({
  selector: 'main',
  directives: [ROUTER_DIRECTIVES, ProductModComponent],
  templateUrl: 'app/product.mod.component.html'


})

export class ProductModComponent{

  private new : boolean=true;
  product : Product;

  constructor(private router: Router, routeParams: RouteParams, private pservice: ProductService){
    let id = routeParams.get('id');
    if(id){
      pservice.getProductById(id).subscribe(
        product => this.product = product,
        error => console.log(error)
      );
      this.new = false;
    }
    else{
      this.product = new Product(undefined,undefined,'',undefined,undefined,'','',undefined,undefined,'','');
      this.new = true;
    }
  }

  cancel(){
    this.router.navigate(['MisProductos']);
  }

  guardar(){
    this.pservice.saveProduct(this.product);
    window.history.back();
  }

}
