import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {UserService} from './user.service';

@Component({
  selector: 'header',
  templateUrl: 'app/header.component.html'

})

export class HeaderComponent{

  private busqueda : string;

  constructor(
    private router:Router,
    private service : UserService
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
    this.service.login();
    this.router.navigate(['Inicio']);
  }
  buscar(){
    this.router.navigate(['Buscar']);
  }

}
