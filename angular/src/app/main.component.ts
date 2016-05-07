import {Component}   from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';
import {UserService, User} from './user.service';
import {FollowService, Follow} from './follow.service';
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


  private follow : Follow;
  private followProducts = [];
  private uso = 'main';
  constructor(
    private router:Router,
    private uService : UserService,
    private fService : FollowService,
    private pService : ProductService
  ){
    let id = this.uService.getIdUserLogued();
    if(id!=0){
      this.fService.getFollow(id).subscribe(
        f => {
          this.follow = f;
        }
      );
      
    }else{
      this.pService.getNewestList().subscribe(
        list => this.newProducts = list,
        error => console.log
      );
    }
  }


}
