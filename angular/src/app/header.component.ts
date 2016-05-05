import {Component} from 'angular2/core';
import {Router,ROUTER_DIRECTIVES} from 'angular2/router';
import {UserService} from './user.service';
import {MensajesService} from './mensajes.service';

@Component({
  selector: 'header',
  templateUrl: 'app/header.component.html',
  directives: [ROUTER_DIRECTIVES]

})

export class HeaderComponent{

  private busqueda : string;

  constructor(
    private router:Router,
    private usr : UserService,
    private msj : MensajesService
  ){}
  
  logout(){
    this.usr.logout();
  }


}
