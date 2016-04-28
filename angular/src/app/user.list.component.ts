import {Component,Input, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';
import {UserService, User } from './user.service';
import {FollowService, UserList} from './follow.service';

@Component({
  selector: 'user-list',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/user.list.component.html'
})

export class UserListComponent implements OnInit{
  @Input()
  private userList;
  @Input()
  private type : string;
  private id : number;
  private
  constructor(
    private uService : UserService,
    private router : Router,
    private routeParams: RouteParams,
    private fService : FollowService
  ){


  }

  ngOnInit(){

  }

  refreshList(){
    this.router.navigate(['Profile',this.routeParams.params]);
  }

  seguir(id){
    this.fService.addFollow(this.uService.getIdUserLogued(),id);
    this.refreshList();
  }
  noSeguir(id){
    this.fService.deleteFollow(this.uService.getIdUserLogued(),id);
    this.refreshList();
  }

}
