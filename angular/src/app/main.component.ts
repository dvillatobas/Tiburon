import {Component}   from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';
import {UserService, User} from './user.service';
import {FollowService} from './follow.service';
import {ProductService} from './product.service';

@Component({
  selector: 'main' ,
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/main.component.html'

})

export class MainComponent{
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
      this.user=this.uService.getUser(id);
      this.follow = this.fService.getListFollow(id).length;
      this.following = this.fService.getListFollowers(id).length;
      let userlist = this.fService.getListFollow(id);
      for(let u of userlist){
        this.followProducts = this.followProducts.concat((this.pService.getProductListUser(u)));
      }
    }


  }


}
