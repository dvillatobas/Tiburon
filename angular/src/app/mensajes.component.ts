import {Component}   from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';
import {MensajesService} from './mensajes.service';
import {UserService} from './user.service';
import {Collapse} from 'ng2-bootstrap/ng2-bootstrap';
import {User} from './user.service';

@Component({
  selector: 'main',
  directives: [ROUTER_DIRECTIVES, Collapse],
  templateUrl: 'app/mensajes.component.html'

})

export class MensajesComponent{
  private fecha = Date.now();
  private isCollapsed : boolean = false;
  private chatList = [];
  private usuario : User;
  private yo : User;
  private contactList = this.service.getContactList(this.usr.getIdUserLogued()).reverse();
  constructor(
    private router:Router,
    private service : MensajesService,
    private usr : UserService

  ){}


  selectChat(id:number){
    this.chatList = [];
    this.usuario = this.usr.getUser(id);
    this.yo = this.usr.getUser(this.usr.getIdUserLogued());
    let lista = this.service.getChatList(id);
    for(let w of lista){
      if(w.idEmisor === id){
        this.chatList.push(new Wisp(this.usuario.getNick(),w.mensaje,w.date,'list-group-item received'));
      }else{
        this.chatList.push(new Wisp(this.yo.getNick(),w.mensaje,w.date,'list-group-item sent'));
      }
    }

  }
  enviar(borrador){
    this.service.nuevo(this.usuario.getId(),borrador);
    
  }

  refreshContactList(){
    this.contactList = [];
    this.contactList = this.service.getContactList(this.usr.getIdUserLogued()).reverse();
  }

}

export class Wisp{
  constructor(
    private nick,
    private mensaje,
    private date,
    private rem
  ){}
}
