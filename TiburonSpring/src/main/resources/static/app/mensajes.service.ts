import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {withObserver} from './utils';
import {UserService, User} from './user.service';


export interface Mensaje {
  id?: number;
  date: Date;
  idEmisor: number;
  idReceptor: number;
  mensaje: string;
  estado: string;
}

const URL = 'mensaje/';

export class Contact{
  constructor(
    public user:User,
    public unread:number
  ){}
}

@Injectable()
export class MensajesService {

  constructor(private http: Http) { }

  private handleError(error: any){
    console.error(error);
    return Observable.throw("Server error (" + error.status + "): " + error.text())
  }

  getMensajes(){
    return this.http.get(URL)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }

  getMensaje(id: number | string){
	    return this.http.get(URL+id)
	      .map(response => response.json())
	      .catch(error => this.handleError(error));
  }

  getContactList(id: number) {
    let contactos = [];
    let u;
    for (let i = 0; i < this.mensajes.length; i++) {

      if (id === this.mensajes[i].idEmisor && !this.estaContenido(this.mensajes[i].idReceptor, contactos)) {

        this.usr.getUser(this.mensajes[i].idReceptor).subscribe(
          user => u = user,
          error => console.log(error)
          );
        contactos.push(new Contact(u,this.getUnreadNumber(u.id)));
      } else if (id === this.mensajes[i].idReceptor && !this.estaContenido(this.mensajes[i].idEmisor, contactos)) {

        this.usr.getUser(this.mensajes[i].idEmisor).subscribe(
          user => u = user,
          error => console.log(error)
          );
        contactos.push(new Contact(u,this.getUnreadNumber(u.id)));
      }
    }
    contactos.sort(
      (n1, n2) => {
        if (n1.id > n2.id) { return -1; }
        if (n1.id < n2.id) { return 1; }
        return 0;
      }
      );
    return withObserver(contactos);
  }

  getChatList(id: number) {
    let messages = [];
    for (let m of this.mensajes) {
      if (id === m.idEmisor && this.usr.getIdUserLogued() === m.idReceptor) {
        messages.push(m);
        this.setMensajeRead(m.id);
      } else if (id === m.idReceptor && this.usr.getIdUserLogued() === m.idEmisor) {
        messages.push(m);
      }
    }
    return withObserver(messages);
  }
  setMensajeRead(id){
    if(id){
      let men = this.mensajes.filter(c => c.id === id)[0];
      men.estado='read';
    }
  }
  getUnreadNumber(id){
    let cont = 0;
    for(let m of this.mensajes){
      if(this.usr.getIdUserLogued() === m.idReceptor && m.idEmisor === id && m.estado === 'unread'){
        cont++;
      }
    }
    return cont;
  }

  estaContenido(id: number, lista = []) {
    for (let u of lista) {
      if (id === u.user.id) {
        return true;
      }
    }
    return false;
  }

  nuevo(destino: number, mensaje: string) {
    let m = new Mensaje(
      0,
      Date.now(),
      this.usr.getIdUserLogued(),
      destino,
      mensaje,
      'unread');

      let body = JSON.stringify(m);
      let headers = new Headers({
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
      });
      let options = new RequestOptions({ headers });

      return this.http.post(URL, body, options)
        .map(response => response.json())
        .catch(error => this.handleError(error));

  }
}
