import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';
import {UserService} from './user.service';
import {User} from './user.service';

export class Mensaje{
  constructor(
    public id,
    public date,
    public idEmisor,
    public idReceptor,
    public mensaje,
    public estado
  ){}
}

@Injectable()
export class MensajesService{
  private mensajes = [
    new Mensaje(1,Date.now(),1,2,'mensaje 1',0),
    new Mensaje(2,Date.now()+2,2,1,'mensaje 1.2',1),
    new Mensaje(3,Date.now()+3,3,2,'mensaje 2',1),
    new Mensaje(4,Date.now()+4,4,1,'mensaje 3',0)
  ];
  //sin inicializar seria un 0
  private lastId:number = 4;
  constructor(
    private usr : UserService
  ){}

  setId(){
    this.lastId++;
    return this.lastId;
  }

  getContactList(id:number){
    let contactos  = [];
    for(let m of this.mensajes){
      if(id===m.idEmisor){
        contactos.push(this.usr.getUser(m.idReceptor));
      }else if(id===m.idReceptor){
        contactos.push(this.usr.getUser(m.idEmisor));
      }
    }
    contactos.sort();
    let aux = 0;
    for(let c of contactos){
      if(c.getId()===aux){
        contactos.splice(contactos.indexOf(c),1);
      }
      aux = c.getId();
    }
    return contactos;
  }

  getChatList(id:number){
    let messages = [];
    for(let m of this.mensajes){
      if(id===m.idEmisor && this.usr.getIdUserLogued() === m.idReceptor){
        messages.push(m);
      }else if(id===m.idReceptor && this.usr.getIdUserLogued() === m.idEmisor){
        messages.push(m);
      }
    }
    return messages;
  }

  nuevo(destino:number,mensaje:string){
    this.mensajes.push(new Mensaje(
      this.setId(),
      Date.now(),
      this.usr.getIdUserLogued(),
      destino,
      mensaje,
      0));
  }
}
