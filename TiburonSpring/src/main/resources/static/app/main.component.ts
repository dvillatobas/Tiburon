import {Component}   from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';
import {UserService, User} from './user.service';
import {FollowService} from './follow.service';
import {ProductService} from './product.service';
import {ProductListImg} from './product.list.img.component';
import {FiltroComponent} from './filtro.component';
import {UserComponent} from './user.component';

@Component({
  selector: 'main' ,
  directives: [ROUTER_DIRECTIVES, ProductListImg, FiltroComponent,UserComponent],
  templateUrl: 'app/main.component.html'

})

export class MainComponent{
  private newProducts = [];


  private user : User;
  private followProducts = [];
  private follow : number;
  private following : number;
  constructor(
    private router:Router,
    private uService : UserService,
    private fService : FollowService,
    private pService : ProductService
  ){
    let id = this.uService.getIdUserLogued();
    if(id!=0){
      this.uService.getUser(id).subscribe(
        u => this.user = u,
        error => console.log(error)
      );
      let list = [];
      this.fService.getListFollow(id).subscribe(
        l => this.follow = l.length,
        error => console.log(error)
      );

      this.fService.getListFollowers(id).subscribe(
        l => this.following = l.length,
        error => console.log(error)
      );
      let userlist =[];
      this.fService.getListFollow(id).subscribe(
        list => userlist = list,
        error => console.log(error)
      );
      let plist = [];
      for(let u of userlist){

        this.pService.getProductListUser(u).subscribe(
          list => plist = list,
          error => console.log(error)
        );
        this.followProducts = this.followProducts.concat((plist));
      }
    }else{
      this.pService.getNewestList().subscribe(
        list => this.newProducts = list,
        error => console.log
      );
    }
  }


}
