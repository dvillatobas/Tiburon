import {Component}   from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';
import {MensajesService} from './mensajes.service';
import {Collapse} from 'ng2-bootstrap/ng2-bootstrap';


@Component({
  selector: 'main',
  directives: [ROUTER_DIRECTIVES, Collapse],
  templateUrl: 'app/mensajes.component.html'

})

export class MensajesComponent{
  private fecha = Date.now();
  private isCollapsed : boolean = false;
  private contact_list = this.service.getContact(1);
  constructor(
    private router:Router,
    private service : MensajesService
  ){}




}
