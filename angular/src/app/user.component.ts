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
  private user: User;
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
    private router : Router,
    private routeParams : RouteParams
  ){}
  ngOnInit(){
    let id = +this.routeParams.get('id');
    this.main = (this.uso==='main');
    this.showFollow = !(0 === this.user.id);

    this.fService.getListFollow(this.user.id).subscribe(
      l => {
        this.nFollows = l.length;
        this.refreshFollow();
      },
      error => console.log(error)
    );

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
