import {Component}   from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';
import {UserService, User} from './user.service';

@Component({
  selector: 'main',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/main.component.html'

})

export class MainComponent{
  private user : User;
  constructor(
    private router:Router,
    private uService : UserService
  ){
    let id = this.uService.getIdUserLogued();
    if(id!=0){
      this.user=this.uService.getUser(id);
    }
  }


}
