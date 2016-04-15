import {Component} from 'angular2/core';
import {HeaderComponent} from './header.component';
import {FooterComponent} from './footer.component';
import {Alert} from 'ng2-bootstrap/ng2-bootstrap';
//<alert dismissOnTimeout="3000">ng2 Bootstrap is working properly</alert>
@Component({
  selector: 'app',
  templateUrl: 'app/app.component.html',
  directives: [HeaderComponent, FooterComponent]
})

export class AppComponent {

  private logueado:boolean;
  constructor(){
    this.logueado=false;
  }


}
