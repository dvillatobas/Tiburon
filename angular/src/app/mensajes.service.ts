import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {withObserver} from './utils';
import {UserService, User} from './user.service';

export class Mensaje {
  constructor(
    public id,
    public date,
    public emisor:User,
    public receptor:User,
    public message,
    public state
    ) { }
}

export class Contact{
  constructor(
    public user:User,
    public unread:number
  ){}
}

const URL = 'https://localhost:8443/message/';

@Injectable()
export class MensajesService {
  constructor(
    private uService: UserService,
    private http:Http
    ) { }

  getContactList() {
    let url = URL + 'contactList';
    return this.http.get(url)
      .map(response => response.json());
  }

  getChatList(u:User) {
    let url = URL + 'getChat';
    let body = JSON.stringify(u);
    let headers = new Headers({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });

    return this.http.put(url, body, options)
      .map(response => response.json());
  }

  setMensajeRead(m:Mensaje){
    let url = URL + 'setRead';
    let body = JSON.stringify(m);
    let headers = new Headers({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });

    return this.http.put(url, body, options)
      .map(response => response.json());

  }

  getUnreadNumber(u:User){
    let url = URL + 'unreadNumber';
    let body = JSON.stringify(u);
    let headers = new Headers({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });

    return this.http.put(url, body, options)
      .map(response => response.json());
  }

  estaContenido(id: number, lista = []) {
    for (let u of lista) {
      if (id === u.user.id) {
        return true;
      }
    }
    return false;
  }

  nuevo(destino: User, mensaje: string) {
    let m = new Mensaje(0,Date.now(),this.uService.getUserLogued(),destino,mensaje,'unread');
    let url = URL + 'add';
    let body = JSON.stringify(m);
    let headers = new Headers({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });

    return this.http.post(url, body, options)
      .map(response => response.json());
  }
}
