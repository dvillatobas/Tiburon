import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';
import {UserService, User} from './user.service';
import 'rxjs/Rx';


export class Follow{
  constructor(
    public user:User,
    public follows : User[],
    public followers : User[]
  ){}
}


const URL = 'https://localhost:8443/follow/';

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

  addFollow(idSeguidor:string,idSeguido:string){
    let url = URL + 'add'+'/'+idSeguidor+'/'+idSeguido;

    return this.http.put(url,'')
        .map(response => response.json())
        .catch(error => this.handleError(error));
  }

  removeFollow(idSeguidor,idSeguido){
    let url = URL + 'remove' + '/'+idSeguidor+'/'+idSeguido;

    return this.http.put(url,'')
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }

  isFollowing(f1:Follow, f2:Follow){
    if(f1){
      return ((f1.follows.filter(u => u.id === f2.user.id)[0]) != undefined);
    }else{
      return false;
    }

  }

  getFollowsByUsers(users:User[]){
    let url = URL + 'byUsers';
    let body = JSON.stringify(users);
    let headers = new Headers({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });

    return this.http.put(url, body, options)
      .map(response => response.json());
  }

  private handleError(error: any){
    console.error(error);
    return Observable.throw("Server error (" + error.status + "): " + error.text())
  }

}
