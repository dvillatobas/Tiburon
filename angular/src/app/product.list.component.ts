import {Component,Input}   from 'angular2/core';
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
  @Input()
  private products = [];

  private edit : boolean;
  private contact : boolean;
  private word = '';

  constructor(
    private pService : ProductService,
    private uService : UserService,
    private router : Router,
    private routeParams: RouteParams,
    private mService : MensajesService
  ){
    this.word = routeParams.get('palabra');
    pService.getProductListUser(uService.getIdUserLogued()).subscribe(
      prod => this.products = prod,
      error => console.log(error)
    );

  }

  ngOnInit(){
    if(this.router.hostComponent.name === 'BuscarComponent'){
      if(this.word!=null){

        let array = this.word.split("+")
        let name = array[0];
        let userProd = array[1];
    		let lowPrice = Number.parseInt(array[2]);
    		let highPrice = Number.parseInt(array[3]);
    		let type = array[4];
    		let location = array[5];
        this.pService.getProductSearch(name,userProd,lowPrice,highPrice,type,location).subscribe(
          products => this.products=products,
          error => console.log(error)
        );
      }
      else{
        this.pService.getProductList().subscribe(
          list => this.products = list,
          error => console.log(error)
        );
      }
      this.edit = false;
      this.contact = true;
    }else if(this.router.hostComponent.name === 'MisProductosComponent'){
      this.pService.getProductListUser(this.uService.getIdUserLogued()).subscribe(
        list => this.products = list,
        error => console.log(error)
      );
      this.edit = true;
      this.contact = false;
    }
  }



  mensaje(idUser){
    if(this.uService.getIdUserLogued()){
      this.router.navigate(['Mensajes', {id: idUser}]);
    }else{
      this.router.navigate(['Login']);
    }
  }

  editar(idProduct:number){

    this.router.navigate(['EditarProducto',{id: idProduct}]);
  }

  borrar(idProduct:number | string){
    let confirm = window.confirm("¿Estas seguro de que deseas borrar este producto?");
    if (confirm){
      this.pService.deleteProduct(idProduct).subscribe(
        _ => this.ngOnInit(),
        error => console.log(error)
      )

    }

  }
}
