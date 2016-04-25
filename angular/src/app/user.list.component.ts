import {Component}   from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';
import {UserService, User } from './user.service';
import {FollowService, UserList} from './follow.service';

@Component({
  selector: 'user-list',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/user.list.component.html'
})

export class UserListComponent{
  private userList = [];
  private type : string;
  private id : number;
  constructor(
    private uService : UserService,
    private router : Router,
    private routeParams: RouteParams,
    private fService : FollowService
  ){
    this.type = this.routeParams.get('type');
    this.id = +this.routeParams.get('id');
    this.refreshList();

  }

  refreshList(){
    let list = []
    this.userList = [];
    if(this.type === 'follow'){
      list = this.fService.getListFollow(this.id);
    }else if(this.type === 'following'){
      list = this.fService.getListFollowers(this.id);
    }

    for(let id of list){
      this.userList.push(new UserList(
        id,
        this.fService.isFollowing(this.uService.getIdUserLogued(),id),
        this.uService.getUser(id).nick,
        this.fService.getListFollow(id).length,
        this.fService.getListFollowers(id).length,
        this.uService.getUser(id).img
      ));
    }
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
