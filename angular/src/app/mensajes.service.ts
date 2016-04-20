import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';
import {UserService} from './user.service';

export class Mensaje{
  constructor(
    public id,
    public date,
    public idEmisor,
    public idReceptor,
    public idProducto,
    public mensaje,
    public estado
  ){}
}

@Injectable()
export class MensajesService{
  private mensajes = [
    new Mensaje(1,Date.now(),1,2,1,'mensaje que seaaaaa',0),
    new Mensaje(1,Date.now()+2,3,2,1,'mensaje que seaaaaa',1),
    new Mensaje(1,Date.now()+4,4,1,1,'mensaje que seaaaaa',0)
  ];
  constructor(
    private usr : UserService
  ){}

  getContact(id:number){
    let contactos = [];
    for(let m of this.mensajes){
      if(id===m.idEmisor){
        contactos.push(this.usr.getUser(m.idReceptor));
      }else if(id===m.idReceptor){
        contactos.push(this.usr.getUser(m.idEmisor));
      }
    }
    return contactos;
  }
}
