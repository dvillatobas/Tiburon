import {Component, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';
import {UserService, User} from './user.service';
import {ProductService, Product} from './product.service';
import {ProductListImg} from './product.list.img.component';
import {FollowService, Follow} from './follow.service';
import {UserComponent} from './user.component';
import {UserListComponent} from './user.list.component'

@Component({
  selector: 'main',
  directives: [ROUTER_DIRECTIVES, ProductListImg, UserComponent, UserListComponent],
  templateUrl: 'app/public.profile.component.html'

})

export class PublicProfileComponent implements OnInit{

  private follow : Follow;
  private showUsers:boolean = false;
  private productsUser = [];
  private titulo : string;
  private follows = [];
  private uso = 'nomain';

  constructor(
    private uService:UserService,
    private routeParams:RouteParams,
    private fService : FollowService,
    private pService : ProductService
  ){}

  ngOnInit(){
    this.refreshList(true);

  }

  refreshList(r:boolean){
    let tipo = this.routeParams.get('type');
    let id = +this.routeParams.get('id');

    console.log(this.follows)
    this.fService.getFollow(id).subscribe(
      f => {
        this.follow = f;
        if(tipo === 'profile'){
          this.showUsers = false;
          this.pService.getProductListUser(f.user).subscribe(
            p => this.productsUser = p
          );
        }else if(tipo === 'followers'){
          this.showUsers = true;
          this.follows = [];
          this.fService.getFollowsByUsers(this.follow.followers).subscribe(
            list => {
              this.follows = list
              console.log(this.follows)
            }
          );
        }else if(tipo === 'follows'){
          this.showUsers = true;
          this.follows = [];
          this.fService.getFollowsByUsers(this.follow.follows).subscribe(
            list => this.follows = list
          );
        }
      }
    );

  }


}
