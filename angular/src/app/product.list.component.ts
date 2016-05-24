import {Component,Input,Output, EventEmitter}   from 'angular2/core';
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
  @Output()
  private refresh = new EventEmitter<boolean>();

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

  }

  ngOnInit(){
    if(this.router.hostComponent.name === 'BuscarComponent'){
      if(this.word!=null){
    //    this.products = this.pService.getProductListSearch(this.word);
      }
      else{

      }
      this.edit = false;
      this.contact = true;
    }else if(this.router.hostComponent.name === 'MisProductosComponent'){
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

  editar(idProduct:number | string){

    this.router.navigate(['EditarProducto',{id: idProduct}]);
  }

  borrar(idProduct:number | string){
    let confirm = window.confirm("¿Estas seguro de que deseas borrar este producto?");
    if (confirm){
      this.pService.del(idProduct).subscribe(
        resultado => {
          this.refresh.next(true);
        },
        error => console.log(error)
      )

    }

  }
}
