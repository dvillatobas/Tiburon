import {Component, OnInit}   from 'angular2/core';
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

export class MensajesComponent implements OnInit{
  private fecha = Date.now();
  private isCollapsed : boolean = false;
  private chatList = [];
  private usuario : User;
  private yo : User;
  private contactList = [];
  private mostrarChat = false;
  private mostrarEscritura = false;
  private borrador='';
  constructor(
    private router:Router,
    private param : RouteParams,
    private mService : MensajesService,
    private uService : UserService

  ){}

  ngOnInit(){
    this.yo = this.uService.getUserLogued();
    if(this.uService.getIdUserLogued()===0){
      this.router.navigate(['Login']);
    }
    this.refreshContactList();
    let id = +this.param.get('id');
    if(id!=0 && this.uService.getIdUserLogued()!=0 && id !=this.uService.getIdUserLogued()){
      this.uService.getUser(id).subscribe(
        u => this.selectChat(u)
      );

    }

  }


  selectChat(user){
    this.chatList = [];
    this.usuario = user;
    this.mostrarEscritura = true;
    let lista = [];
    this.mService.getChatList(user).subscribe(
      list => {
        lista = list
        console.log(lista)
        for(let w of lista){
          if(w.emisor.id === user.id){
            this.chatList.push(new Wisp(user.nick,w.message,w.date,'list-group-item received'));
          }else{
            this.chatList.push(new Wisp(this.yo.nick,w.message,w.date,'list-group-item sent'));
          }
        }
        if(lista.length === 0){
          this.chatList.push(new Wisp('','Nuevo chat con '+ this.usuario.nick,Date.now(),'list-group-item center-block'));
        }
        this.refreshContactList();
      },
      error => console.log(error)
    );


  }
  enviar($event){
    event.preventDefault();
    console.log(this.borrador)
    this.mService.nuevo(this.usuario,this.borrador).subscribe(
      m => {
        this.borrador ='';
        this.selectChat(this.usuario);
      },
      error => console.log(error)
    );

  }

  refreshContactList(){
    this.contactList = [];
    this.mService.getContactList().subscribe(
      list => {
        this.contactList = list;
        console.log(this.contactList)
      },
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
