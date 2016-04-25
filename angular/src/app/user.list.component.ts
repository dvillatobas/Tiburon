import {Component}   from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';
import {UserService, User} from './user.service';
import {FollowService} from './follow.service';

@Component({
  selector: 'user-list',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/user.list.component.html'
})

export class UserListComponent{
  private userList = [];
  constructor(
    private uService : UserService,
    private router : Router,
    private routeParams: RouteParams,
    private fService : FollowService
  ){
    let tipo = this.routeParams.get('type');
    let id = +this.routeParams.get('id');
    let list = []
    if(tipo === 'follow'){
      list = this.fService.getListFollow(id);
    }else if(tipo === 'following'){
      list = this.fService.getListFollowers(id);
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
}

export class UserList{
  constructor(
    public id,
    public following:boolean,
    public nick,
    public follow,
    public followers,
    public img
  ){}
}
