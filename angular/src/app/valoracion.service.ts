import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {UserService, User} from './user.service';
import {Product} from './product.service';
import 'rxjs/Rx';


export class Valoration{
  constructor(
    public id,
    public user:User,
    public valoration,
    public description,
    public product:Product
  ){}
}

const URL = 'https://localhost:8443/valoration/';

@Injectable()
export class ValorationService{


  constructor(
    private uService: UserService,
    private http:Http
  ){}

  get(p:Product){
    let url = URL + 'product';
    let body = JSON.stringify(p);
    let headers = new Headers({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });

    return this.http.put(url, body, options)
      .map(response => response.json());
  }

  add(v:Valoration){
    let url = URL + 'add';
    let body = JSON.stringify(v);
    let headers = new Headers({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });

    return this.http.post(url, body, options)
      .map(response => response.json());
  }







}
