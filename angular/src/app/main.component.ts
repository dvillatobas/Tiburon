import {Component}   from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';
import {UserService} from './user.service';

@Component({
  selector: 'main',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/main.component.html'

})

export class MainComponent{
  constructor(
    private router:Router,
    private service : UserService
  ){}
  

}
