import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {MainComponent} from './main.component';
import {BookListComponent} from './book-list.component';
import {BookDetailComponent} from './book-detail.component';
import {BookFormComponent} from './book-form.component';
import {BookService} from './book.service';
import {Alert} from 'ng2-bootstrap/ng2-bootstrap';
import {HeaderComponent} from './header.component';
import {FooterComponent} from './footer.component';
import {MisProductosComponent} from './mis-productos.component';

@Component({
  selector: 'app',
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES, Alert, HeaderComponent, FooterComponent]
})
@RouteConfig([
  {path: '/', name: 'Inicio', component: MainComponent, useAsDefault:true},
  {path: '/mis-productos', name: 'MisProductos', component: MisProductosComponent},
  {path: '/book/new', name: 'BookNew', component: BookFormComponent},
  {path: '/book/edit/:id', name: 'BookEdit', component: BookFormComponent}
])
export class AppComponent { }
