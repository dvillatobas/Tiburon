import {Component, Input, Output, EventEmitter}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Valoration, ValorationService}   from './valoracion.service';
import {Product,ProductService} from './product.service';
import {UserService,User} from './user.service';

@Component({
    selector: 'valoration',
    templateUrl: 'app/valoracion.component.html'
})

export class ValorationComponent{
  private user: User;
  private product: Product;
  private error: boolean = false;

  @Input()
  private valorations;

  @Output()
  private remove = new EventEmitter<any>();

  constructor(
    private vService: ValorationService,
    private router: Router,
    private routeParams: RouteParams,
    private uService: UserService,
    private pService: ProductService
    ) {}

}
