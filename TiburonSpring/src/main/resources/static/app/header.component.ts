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
  inicio(){
    this.router.navigate(['Inicio']);
  }

  misprod(){
    this.router.navigate(['MisProductos']);
  }
  mensajes(){
    this.router.navigate(['Mensajes']);
  }
  login(){
    this.router.navigate(['Login']);
  }
  logout(){
    this.usr.logout();
  }
  

}
