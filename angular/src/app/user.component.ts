import {Component,Input, OnInit, OnChanges}   from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';
import {UserService, User } from './user.service';
import {FollowService, Follow} from './follow.service';


@Component({
  selector: 'user',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/user.component.html'
})
export class UserComponent implements OnInit, OnChanges{
  @Input()
  private follow: Follow;

  @Input()
  private uso : string;

  private showFollowing:boolean = false;
  private main : boolean = false;
  private following : boolean;
  private id;
  constructor(
    private fService : FollowService,
    private uService : UserService,
    private router : Router,
    private routeParams : RouteParams
  ){



  }
  ngOnInit(){
    this.main = (this.uso === 'main');

    if (this.main){
      this.id = this.uService.getUserLogued().id;
    }else{
      this.id = +this.routeParams.get('id');
    }

    this.showFollowing = !(this.id === this.uService.getIdUserLogued());


  }
  ngOnChanges(){

  }

  refreshFollow(){

    this.fService.getFollow(this.id).subscribe(
      f => {
        console.log(f);
        this.follow = f;

        console.log(this.follow);
      }
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
