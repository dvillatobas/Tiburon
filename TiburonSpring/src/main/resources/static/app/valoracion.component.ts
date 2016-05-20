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
  private comment: Valoration;

  @Output()
  private remove = new EventEmitter<any>();

  constructor(
    private vService: ValorationService,
    private router: Router,
    private routeParams: RouteParams,
    private uService: UserService,
    private pService: ProductService
    ) {
    let id = +this.routeParams.get('id');
    //if (this.pService.exist(id)) {
      this.pService.getProductById(+this.routeParams.get('id')).subscribe(
        prod => {
          this.product = prod
        },
        error => {
          console.log(error);
        }
        );
      this.uService.getUser(this.product.idUser).subscribe(
        usr => this.user = usr,
        error => console.log(error)
        );
  //  } else {
      //this.error = true;


  }

}
