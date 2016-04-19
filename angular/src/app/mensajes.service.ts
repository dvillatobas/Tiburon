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
    new Mensaje(1,'1/5/6',1,2,1,'mensaje que seaaaaa','visto')
  ];
  constructor(
    private usr : UserService
  ){}

  getContact(id:string){
    let contactos = [];
    for(let m of this.mensajes){
      if(id===m.idEmisor){
        contactos.push(this.usr.getUser(m.idEmisor));
      }else if(id===m.idReceptor){
        contactos.push(this.usr.getUser(m.idEmisor));
      }
    }
    return contactos;
  }
}
