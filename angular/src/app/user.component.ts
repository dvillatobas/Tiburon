import {Component,Input, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';
import {UserService, User } from './user.service';
import {FollowService} from './follow.service';


@Component({
  selector: 'user',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/user.component.html'
})
export class UserComponent implements OnInit{
  @Input()
  private user;
  @Input()
  private uso : string;

  private main : boolean;
  private nFollows : number;
  private nFollowers : number;
  private showFollow : boolean;
  private follow : boolean;

  constructor(
    private fService : FollowService,
    private uService : UserService,
    private router : Router
  ){}
  ngOnInit(){
    this.main = (this.uso==='main');
    this.showFollow = !(this.uService.getIdUserLogued() === this.user.id);

    this.fService.getListFollow(this.user.id).subscribe(
      l => this.nFollows = l.length,
      error => console.log(error)
    );
    this.refreshFollow();
  }

  refreshFollow(){
    this.follow = this.fService.isFollowing(this.uService.getIdUserLogued(),this.user.id);
    this.fService.getListFollowers(this.user.id).subscribe(
      l => this.nFollowers = l.length,
      error => console.log(error)
    );
  }

  noSeguir(id){
    this.fService.deleteFollow(this.uService.getIdUserLogued(),id);
    this.refreshFollow();
  }
  seguir(id){
    if(this.uService.getIdUserLogued()!=0){
      this.fService.addFollow(this.uService.getIdUserLogued(),id);
      this.refreshFollow();
    }else{
      this.router.navigate(['Login']);
    }
  }


}
