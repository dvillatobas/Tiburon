import {Component}   from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';
import {UserService, User} from './user.service';
import {ProductService, Product} from './product.service';
import {ProductListImg} from './product.list.img.component';

@Component({
  selector: 'main',
  directives: [ROUTER_DIRECTIVES, ProductListImg],
  templateUrl: 'app/public.profile.component.html'

})

export class PublicProfileComponent{

  private user : User;
  private follow : boolean;

  constructor(
    private uService:UserService,
    private routeParams:RouteParams
  ){
    this.user=this.uService.getUser(+this.routeParams.get('id'));

  }
}
