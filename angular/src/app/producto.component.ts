import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';
import {UserService} from './user.service';

@Component({
  selector: 'main',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/producto.component.html'

})

export class ProductoComponent{
  constructor(
    private router:Router,
    private service : UserService
  ){}
}
