import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {MainComponent} from './main.component';
import {Alert} from 'ng2-bootstrap/ng2-bootstrap';
import {HeaderComponent} from './header.component';
import {FooterComponent} from './footer.component';
import {MisProductosComponent} from './mis-productos.component';
import {LoginComponent} from './login.component';
import {MensajesComponent} from './mensajes.component';
import {BuscarComponent} from './buscar.component';
import {UserService} from './user.service';
import {MensajesService} from './mensajes.service';
import {ProductoComponent} from './producto.component';

@Component({
  selector: 'app',
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES, Alert, HeaderComponent, FooterComponent],
  providers: [UserService, MensajesService]
})
@RouteConfig([
  {path: '/', name: 'Inicio', component: MainComponent},
  {path: '/novedades', name: 'Novedades', component: BuscarComponent},
  {path: '/mis-productos', name: 'MisProductos', component: MisProductosComponent},
  {path: '/mensajes', name: 'Mensajes', component: MensajesComponent},
  {path: '/login', name: 'Login', component: LoginComponent},
  {path: '/busqueda', name: 'Buscar', component: BuscarComponent},
  {path: '/producto', name: 'Producto', component: ProductoComponent}
])
export class AppComponent {
  constructor(
    private router:Router,
    private users : UserService,
    private mensajes : MensajesService
  ){}
}
