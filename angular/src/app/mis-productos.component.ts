import {Component, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES,Router} from 'angular2/router';
import {ProductListComponent} from './product.list.component';
import {UserService} from './user.service';
import {ProductService} from './product.service';

@Component({
    selector: 'main',
    templateUrl: 'app/mis-productos.component.html',
    directives: [ROUTER_DIRECTIVES,ProductListComponent]
})

export class MisProductosComponent implements OnInit{

  private list;

  constructor(
    private uService : UserService,
    private pService : ProductService,
    private router : Router
  ){

  }
  ngOnInit(){
    if(this.uService.getIdUserLogued()===0){
      this.router.navigate(['Login']);
    }else{
      this.pService.getProductListUser(this.uService.getUserLogued()).subscribe(
        list => {
          this.list = list;
          console.log(this.list)
        }
      );
    }
  }

  nuevoProducto(){
    this.router.navigate(['NuevoProducto']);
  }

  refresh(b){
    this.ngOnInit();
  }



}
