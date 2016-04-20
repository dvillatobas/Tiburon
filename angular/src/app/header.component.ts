import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {UserService} from './user.service';
import {MensajesService} from './mensajes.service';

@Component({
  selector: 'header',
  templateUrl: 'app/header.component.html'

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
  novedades(){
    this.router.navigate(['Novedades']);
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
    this.router.navigate(['Inicio']);
  }
  buscar(){
    this.router.navigate(['Buscar']);
  }

}
