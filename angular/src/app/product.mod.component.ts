import {Component}   from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';

@Component({
  selector: 'main',
  directives: [ROUTER_DIRECTIVES, ProductModComponent],
  templateUrl: 'app/product.mod.component.html'


})

export class ProductModComponent{

  private new : boolean=true;


}
