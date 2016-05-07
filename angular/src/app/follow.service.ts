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
  getAll(){
    return this.http.get(URL)
      .map(response => response.json());
  }

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

  isFollowing(f1:Follow, f2:Follow){
    if(f1){
      return ((f1.follows.filter(u => u.id === f2.user.id)[0]) != undefined);
    }else{
      return false;
    }

  }

  getFollowsByUsers(ids:number[]){
    let url = URL + 'byUsers';
    let body = JSON.stringify(ids);
    let headers = new Headers({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });

    return this.http.put(url, body, options)
      .map(response => response.json());
  }



}
