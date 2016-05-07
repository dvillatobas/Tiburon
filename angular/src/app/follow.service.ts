import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';
import {UserService, User} from './user.service';


export class Follow{
  constructor(
    public user:User,
    public follows : User[],
    public followers : User[]
  ){}
}


const URL = 'follow/';

@Injectable()
export class FollowService{

  constructor(
    private uService: UserService,
    private http:Http
  ){}


  getFollow(id:number){
    return this.http.get(URL+id)
      .map(response => response.json());
  }

  addFollow(idSeguidor,idSeguido){
    let url = URL + 'add' + '/' + idSeguidor + '/' + idSeguido;
    let body = '';
    let headers = new Headers({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });

    return this.http.put(url, body, options)
      .map(response => response.json());
  }

  removeFollow(idSeguidor,idSeguido){
    let url = URL + 'remove' + '/'+idSeguidor+'/'+idSeguido;
    let body = '';
    let headers = new Headers({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });

    return this.http.put(url, body, options)
      .map(response => response.json());
  }

  isFollowing(seguidor,seguido){
    this.getFollow(seguidor).subscribe(
      f => {
        let user = f.followers.filter(u => u.id === seguido)[0];
        return (user != undefined);
      }
    );
  }



}
