import {Component, Input, Output, EventEmitter}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Valoration, ValorationService}   from './valoracion.service';
import {Product,ProductService} from './product.service';
import {UserService} from './user.service';

@Component({
    selector: 'valoration',
    templateUrl: 'app/valoracion.component.html'
})

export class ValorationComponent{

  @Input()
  private comment: Valoration;

  @Output()
  private remove = new EventEmitter<any>();

  fireRemove(){
    this.remove.next(undefined);
  }
}
