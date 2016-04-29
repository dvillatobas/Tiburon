import {Component, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';
import {Product, ProductService} from './product.service';
import {ProductListComponent} from './product.list.component';
import {FiltroComponent} from './filtro.component';
import {UserService} from './user.service';
import {UserListComponent} from './user.list.component';
import {FollowService} from './follow.service';

@Component({
  selector: 'main',
  directives: [ROUTER_DIRECTIVES, ProductListComponent,FiltroComponent,UserListComponent],
  templateUrl: 'app/buscar.component.html',


})

export class BuscarComponent implements OnInit{

  private products=[];
  private users=[];
  private palabra: string;
  private prods : boolean = true;

  constructor(
    private pService : ProductService,
    private router : Router,
    private routeParams: RouteParams,
    private uService : UserService,
    private fService : FollowService
  ){}

  ngOnInit(){
    this.palabra = this.routeParams.get('palabra');
    let p = this.palabra.split('+');
    if(p[1]==='product'){
      this.prods = true;
      this.pService.getProductListSearch(this.palabra).subscribe(
        l => this.products = l,
        error => console.log(error)
      );

    }else if(p[1]==='user'){
      this.prods = false;
      let ulist = [];
      this.uService.getUserListSearch(this.palabra).subscribe(
        l => ulist = l,
        error => console.log(error)
      );
      for(let u of ulist){
        this.fService.getUserList(u).subscribe(
          ul => this.users.push(ul),
          error => console.log(error)
        );
      }
    }
  }




}
