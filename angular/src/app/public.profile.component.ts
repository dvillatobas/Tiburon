import {Component, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';
import {UserService, User} from './user.service';
import {ProductService, Product} from './product.service';
import {ProductListImg} from './product.list.img.component';
import {FollowService, UserList} from './follow.service';
import {UserComponent} from './user.component';
import {UserListComponent} from './user.list.component'

@Component({
  selector: 'main',
  directives: [ROUTER_DIRECTIVES, ProductListImg, UserComponent, UserListComponent],
  templateUrl: 'app/public.profile.component.html'

})

export class PublicProfileComponent implements OnInit{

  private user : User;
  private showFollowers:boolean = false;
  private productsUser = [];
  private titulo : string;
  private userList = [];

  constructor(
    private uService:UserService,
    private routeParams:RouteParams,
    private fService : FollowService,
    private pService : ProductService
  ){}

  ngOnInit(){
    let tipo = this.routeParams.get('type');
    let id = this.routeParams.get('id');

    this.uService.getUser(+this.routeParams.get('id')).subscribe(
      u => this.user = u,
      error => console.log(error)
    );

    if(tipo === 'profile'){
      this.pService.getProductListUser(this.user.id).subscribe(
        l => this.productsUser = l,
        error => console.log(error)
      );

      this.titulo = 'Anuncios de ' + this.user.nick;
    }else if(tipo === 'following'){
      this.fService.getUserListFollows(this.user.id).subscribe(
        l => this.userList = l,
        error => console.log(error)
      );
      this.showFollowers = true;
    }else if(tipo === 'followers'){
      this.fService.getUserListFollowers(this.user.id).subscribe(
        l => this.userList = l,
        error => console.log(error)
      );
      console.log(this.userList);
      this.showFollowers = true;
    }

  }


}
