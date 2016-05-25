import {Component}   from 'angular2/core';
import {ROUTER_DIRECTIVES,Router} from 'angular2/router';
import {ProductListComponent} from './product.list.component';
import {UserService} from './user.service';

@Component({
    selector: 'main',
    templateUrl: 'app/mis-productos.component.html',
    directives: [ROUTER_DIRECTIVES, ProductListComponent]
})

export class MisProductosComponent{
  constructor(
    private uService : UserService,
    private router : Router
  ){
    if(this.uService.getIdUserLogued()===0){
      this.router.navigate(['Login']);
    }
  }

  nuevoProducto(){
    this.router.navigate(['NuevoProducto']);
  }




}
