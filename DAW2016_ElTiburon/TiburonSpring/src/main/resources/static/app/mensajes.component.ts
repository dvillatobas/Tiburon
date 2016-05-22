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
  private contactList = [];
  private mostrarChat = false;
  constructor(
    private router:Router,
    private param : RouteParams,
    private mService : MensajesService,
    private uService : UserService

  ){
    if(this.uService.getIdUserLogued()===0){
      this.router.navigate(['Login']);
    }
    this.refreshContactList();
    let id = +this.param.get('id');
    if(id!=0 && this.uService.getIdUserLogued()!=0 && id !=this.uService.getIdUserLogued()){
      this.selectChat(id);

    }

  }


  selectChat(id:number){
    this.chatList = [];
    this.uService.getUser(id).subscribe(
      user => this.usuario = user,
      error => console.log()
    );
    this.uService.getUser(this.uService.getIdUserLogued()).subscribe(
      user => this.yo = user,
      error => console.log()
    );
    let lista = [];
    this.mService.getChatList(id).subscribe(
      list => lista = list,
      error => console.log(error)
    );
    for(let w of lista){
      if(w.idEmisor === id){
        this.chatList.push(new Wisp(this.usuario.nick,w.mensaje,w.date,'list-group-item received'));
      }else{
        this.chatList.push(new Wisp(this.yo.nick,w.mensaje,w.date,'list-group-item sent'));
      }
    }
    if(lista.length === 0){
      this.chatList.push(new Wisp('','Nuevo chat con '+ this.usuario.nick,Date.now(),'list-group-item center-block'));
    }
    this.refreshContactList();

  }
  enviar(borrador){
    this.mService.nuevo(this.usuario.id,borrador);
    this.selectChat(this.usuario.id);
  }

  refreshContactList(){
    this.contactList = [];
    this.mService.getContactList(this.uService.getIdUserLogued()).subscribe(
      list => this.contactList = list,
      error => console.log(error)
    );
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
