import {Component,Input, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';
import {UserService, User } from './user.service';
import {FollowService, Follow} from './follow.service';


@Component({
  selector: 'user',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/user.component.html'
})
export class UserComponent implements OnInit{
  @Input()
  private follow: Follow;

  @Input()
  private uso : string;


  private main : boolean = false;
  private following : boolean;

  constructor(
    private fService : FollowService,
    private uService : UserService,
    private router : Router,
    private routeParams : RouteParams
  ){



  }
  ngOnInit(){
    this.main = (this.uso === 'main');
    this.refreshFollow();
  }

  refreshFollow(){
    let id;
    if (this.main){
      id = this.uService.getIdUserLogued
    }else{
      id = +this.routeParams.get('id');
    }
    this.fService.getFollow(id).subscribe(
      f => this.follow = f
    );
  }

  noSeguir(){
    this.fService.removeFollow(this.uService.getIdUserLogued(),this.follow.user.id);
    this.refreshFollow();
  }
  seguir(){
    let id = this.uService.getIdUserLogued();
    if(id!=0){
      this.fService.addFollow(id,this.follow.user.id);
      this.refreshFollow();
    }else{
      this.router.navigate(['Login']);
    }
  }


}
