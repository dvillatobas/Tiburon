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
import {ProductService} from './product.service';
import {FollowService} from './follow.service';
import {ProductoComponent} from './producto.component';
import {ProductModComponent} from './product.mod.component';
import {PublicProfileComponent} from './public.profile.component';
import {UserListComponent} from './user.list.component';

@Component({
  selector: 'app',
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES, Alert, HeaderComponent, FooterComponent],
  providers: [UserService, MensajesService, ProductService, FollowService]
})
@RouteConfig([
  {path: '/', name: 'Inicio', component: MainComponent, useAsDefault:true},
  {path: '/novedades', name: 'Novedades', component: BuscarComponent},
  {path: '/mis-productos', name: 'MisProductos', component: MisProductosComponent},
  {path: '/mensajes', name: 'Mensajes', component: MensajesComponent},
  {path: '/mensajes/:id', name: 'MensajesUser', component: MensajesComponent},
  {path: '/login', name: 'Login', component: LoginComponent},
  {path: '/busqueda/:palabra', name: 'Buscar', component: BuscarComponent},
  {path: '/producto/:id', name: 'Producto', component: ProductoComponent},
  {path: '/producto/edit/:id', name: 'EditarProducto', component: ProductModComponent},
  {path: '/producto/nuevo', name: 'NuevoProducto', component: ProductModComponent},
  {path: '/profile/:id', name: 'Profile', component: PublicProfileComponent},
  {path: '/follow/:type/:id', name: 'Follow', component: UserListComponent}
])
export class AppComponent {
  constructor(
    private router:Router,
    private users : UserService,
    private mensajes : MensajesService,
    private products : ProductService,
    private follows : FollowService
  ){}
}
