import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';
import {UserService} from './user.service';
import {ValorationComponent} from './valoracion.component';
import {Valoration} from './valoracion.service';

@Component({
  selector: 'main',
  directives: [ROUTER_DIRECTIVES, ValorationComponent],
  templateUrl: 'app/producto.component.html'

})

export class ProductoComponent{

  private comments: Valoration[] = []
  private uService: UserService;

  constructor(private router:Router//private service : UserService
  ){}

  addValoration(valoracion: string,description: string){
    this.comments.push(new Valoration(1,valoracion,description));
  }
}
