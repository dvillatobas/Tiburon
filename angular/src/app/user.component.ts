import {Component,Input, OnInit, OnChanges}   from 'angular2/core';
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
      let idLogged = this.uService.getIdUserLogued();
      if(idLogged){
        this.fService.getFollow(this.uService.getIdUserLogued()).subscribe(
          f => {
            this.following = (this.fService.isFollowing(f,this.follow));
          }
        );
      }else{
        this.following = false;
      }

    }


    this.showFollowing = !(this.id === this.uService.getIdUserLogued());


  }

  noSeguir(id){
    if(this.uService.getIdUserLogued()!=0){
      this.fService.removeFollow(this.uService.getIdUserLogued(),id).subscribe(
        response => {
          this.follow = response;
          this.following = false;
        }
      );

    }else{
      this.router.navigate(['Login']);
    }
  }
  seguir(id){
    if(this.uService.getIdUserLogued()!=0){
      this.fService.addFollow(this.uService.getIdUserLogued(),id).subscribe(
        response => {
          this.follow = response;
          this.following = true;
        }
      );
    }else{
      this.router.navigate(['Login']);
    }
  }


}
