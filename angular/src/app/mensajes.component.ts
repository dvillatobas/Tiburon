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
  private contactList = this.mService.getContactList(this.uService.getIdUserLogued()).reverse();
  constructor(
    private router:Router,
    private mService : MensajesService,
    private uService : UserService

  ){
    if(this.uService.getIdUserLogued()===0){
      this.router.navigate(['Login']);
    }
  }


  selectChat(id:number){
    this.chatList = [];
    this.usuario = this.uService.getUser(id);
    this.yo = this.uService.getUser(this.uService.getIdUserLogued());
    let lista = this.mService.getChatList(id);
    for(let w of lista){
      if(w.idEmisor === id){
        this.chatList.push(new Wisp(this.usuario.getNick(),w.mensaje,w.date,'list-group-item received'));
      }else{
        this.chatList.push(new Wisp(this.yo.getNick(),w.mensaje,w.date,'list-group-item sent'));
      }
    }

  }
  enviar(borrador){
    this.mService.nuevo(this.usuario.getId(),borrador);
    this.selectChat(this.usuario.getId());
  }

  refreshContactList(){
    this.contactList = [];
    this.contactList = this.mService.getContactList(this.uService.getIdUserLogued()).reverse();
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
