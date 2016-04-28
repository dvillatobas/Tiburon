import {Component}   from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';

@Component({
  selector: 'filtros-busqueda' ,
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/filtro.component.html'

})

export class FiltroComponent {

  private busqueda;
  private userProd;
  private desde;
  private hasta;
  private tipo;
  private ubicacion;
  private vendedorP:boolean;
  private vendedorE:boolean;

  constructor(
    private router:Router,
    private rParams:RouteParams
  ){
    this.userProd = 'product';
    this.tipo = 'ambos';
    this.vendedorP = true;
    this.vendedorE = true;
  }






  buscar(){
    let palabra = this.busqueda + '/' + this.userProd+ '/' +this.desde+ '/' +this.hasta+ '/' +this.tipo+ '/' +this.ubicacion+ '/' +this.vendedorP+ '/' +this.vendedorE;
    this.router.navigate(['Buscar',{palabra: palabra}]);
  }
}
