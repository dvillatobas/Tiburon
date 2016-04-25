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
    new Mensaje(3,Date.now()+3,3,2,'mensaje 2',1),
    new Mensaje(2,Date.now()+2,2,1,'mensaje 1.2',1),
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
    for(let i=0;i<this.mensajes.length;i++){

      if(id===this.mensajes[i].idEmisor && !this.estaContenido(this.mensajes[i].idReceptor,contactos)){
        let u;
        this.usr.getUser(this.mensajes[i].idReceptor).subscribe(
          user => u = user,
          error => console.log(error)
        );
        contactos.push(u);
      }else if(id===this.mensajes[i].idReceptor && !this.estaContenido(this.mensajes[i].idEmisor,contactos)){
        let u;
        this.usr.getUser(this.mensajes[i].idEmisor).subscribe(
          user => u = user,
          error => console.log(error)
        );
        contactos.push(u);
      }
    }
    contactos.sort(
      (n1,n2) => {
        if (n1.id > n2.id) {  return -1;  }
        if (n1.id < n2.id) {  return 1;   }
        return 0;
      }
    );
    console.log(contactos);
    return withObserver(contactos);
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
    return withObserver(messages);
  }

  estaContenido(id:number,lista=[]){
    for (let u of lista){
      if (id===u.id){
        return true;
      }
    }
    return false;
  }

  nuevo(destino:number,mensaje:string){
    let m = new Mensaje(
      this.setId(),
      Date.now(),
      this.usr.getIdUserLogued(),
      destino,
      mensaje,
      0);
    this.mensajes.push(m);
    return withObserver(m);
  }
}
