import {Component,Input, OnInit, Output, EventEmitter}   from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';
import {UserService, User } from './user.service';
import {FollowService, Follow} from './follow.service';

@Component({
  selector: 'user-list',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/user.list.component.html'
})

export class UserAux{
  constructor(
    public follow : Follow,
    public isFollowing : boolean
  ){}
}

export class UserListComponent implements OnInit{
  @Input()
  private followList;
  private list=[];
  @Input()
  private type : string;
  @Output()
  private refresh = new EventEmitter<boolean>();
  private id : number;
  constructor(
    private uService : UserService,
    private router : Router,
    private routeParams: RouteParams,
    private fService : FollowService
  ){}

  ngOnInit(){
    for(let f of this.followList){
      this.list.push(new UserAux(f,(this.uService.getIdUserLogued(),f.user.id)));
    }
  }

  refreshList(b:boolean){
    this.refresh.next(true);
  }

  seguir(id){
    if(this.uService.getIdUserLogued()!=0){
      this.fService.addFollow(this.uService.getIdUserLogued(),id);
      this.refreshList(true);
    }else{
      this.router.navigate(['Login']);
    }

  }
  noSeguir(id){
    this.fService.removeFollow(this.uService.getIdUserLogued(),id);
    this.refreshList(true);
  }

}
