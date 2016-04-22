import {Component}   from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {ProductListComponent} from './product.list.component';

@Component({
    selector: 'main',
    templateUrl: 'app/mis-productos.component.html',
    directives: [ROUTER_DIRECTIVES, ProductListComponent]
})

export class MisProductosComponent{}
