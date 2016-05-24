import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';
import {UserService, User} from './user.service';

export class Mensaje {
  constructor(
    public id,
    public date,
    public idEmisor,
    public idReceptor,
    public mensaje,
    public estado
    ) { }
}

export class Contact{
  constructor(
    public user:User,
    public unread:number
  ){}
}

@Injectable()
export class MensajesService {
  private mensajes = [
    new Mensaje(1, Date.now(), 1, 2, '¿aceptas cambio por una moto + dinero?', 'unread'),
    new Mensaje(3, Date.now() + 3, 3, 2, '¿Puedes quedar el viernes por la tarde?', 'unread'),
    new Mensaje(2, Date.now() + 2, 2, 1, 'No, gracias por tu interes', 'unread'),
    new Mensaje(4, Date.now() + 4, 4, 1, '¿Cuanto pides por él?', 'unread')
  ];
  //sin inicializar seria un 0
  private lastId: number = 4;
  constructor(
    private usr: UserService
    ) { }

  setId() {
    this.lastId++;
    return this.lastId;
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
      this.setId(),
      Date.now(),
      this.usr.getIdUserLogued(),
      destino,
      mensaje,
      'unread');
    this.mensajes.push(m);
    return withObserver(m);
  }
}
