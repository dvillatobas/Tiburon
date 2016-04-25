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
      this.fService.getListFollow(this.id).subscribe(
        l => list = l,
        error => console.log(error)
      );
    }else if(this.type === 'following'){
      this.fService.getListFollowers(this.id).subscribe(
        l => list = l,
        error => console.log(error)
      );
    }
    let u : User;
    let followers;
    let follow;
    for(let id of list){

      this.uService.getUser(id).subscribe(
        usr => u = usr,
        error => console.log(error)
      );

      this.fService.getListFollow(id).subscribe(
        l => follow = l.length,
        error => console.log(error)
      );

      this.fService.getListFollowers(id).subscribe(
        l => followers = l.length,
        error => console.log(error)
      );
      this.userList.push(new UserList(
        id,
        this.fService.isFollowing(this.uService.getIdUserLogued(),id),
        u.nick,
        follow,
        followers,
        u.img
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
