import {Component}   from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';
import {ProductService, Product} from './product.service';

@Component({
  selector: 'main',
  directives: [ROUTER_DIRECTIVES, ProductModComponent],
  templateUrl: 'app/product.mod.component.html'


})

export class ProductModComponent{

  private nuevo : boolean=true;
  product : Product;
  private emptyName:boolean;
  private emptyUsed:boolean;
  private emptyLocation:boolean;
  private emptyPrice:boolean;
  private emptyYear:boolean;
  private emptyDescription:boolean;
  private numericUsed:boolean;
  private numericPrice:boolean;
  private numericYear:boolean;



  constructor(private router: Router, routeParams: RouteParams, private pservice: ProductService){
    let id = routeParams.get('id');
    if(id){
      pservice.getProductById(id).subscribe(
        product => this.product = product,
        error => console.log(error)
      );
      this.nuevo = false;
    }
    else{
      this.product = new Product(undefined,undefined,'',undefined,undefined,'','',undefined,undefined,'','');
      this.nuevo = true;
    }
  }

  cancelar(){
    //this.router.navigate(['MisProductos']);
    window.history.back();

  }


  comprobarGuardar(){
    //this.resetEmpty();
    if(this.product.name === ''){
      this.emptyName=true;
      return 0;
    }
    if(this.product.used === undefined){
      this.emptyUsed=true;
      return 0;
      //this.product.used = "nuevo";
    }
    if(this.product.location === ''){
      this.emptyLocation=true;
      return 0;
    }
    if(this.product.price === undefined){
      this.emptyPrice=true;
      return 0;
    }
    if(this.product.year === undefined){
      this.product.year = "Sin indicar";
    }
    if(this.product.description.length<=10){
      this.emptyDescription = true;
      return 0;
    }

    if(!this.isNumeric(this.product.used)){
      this.numericUsed=true;
      return 0;
    }
    if(!this.isNumeric(this.product.price)){
      this.numericPrice=true;
      return 0;
    }

    if(this.product.year != undefined){
      if(!this.isNumeric(this.product.year)){
        this.numericYear=true;
        return 0;
      }
    }

    this.pservice.saveProduct(this.product);
    //this.router.navigate(['Inicio']);
    window.history.back();

  }

  private isNumeric(num:any) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}



}
