import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
  selector: 'header',
  templateUrl: 'app/header.component.html'

})

export class HeaderComponent{
  private logueado : boolean = false;
  private busqueda : string;

  constructor(private router:Router){}
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
    this.logueado=!this.logueado;
    this.router.navigate(['Login']);
  }
  logout(){
    this.router.navigate(['Inicio']);
  }
  buscar(){
    this.router.navigate(['Buscar']);
  }

}
