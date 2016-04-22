import {Component}   from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';
import {ProductListComponent} from './product.list.component';

@Component({
  selector: 'main',
  directives: [ROUTER_DIRECTIVES, ProductListComponent],
  templateUrl: 'app/buscar.component.html',


})

export class BuscarComponent{}
