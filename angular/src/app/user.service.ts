import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';
import {Http, Headers, RequestOptions} from 'angular2/http';

export class User{
  constructor(
    public id,
    public nick,
    public nombre,
    public apellidos,
    public telefono,
    public email,
    public img,
    public tipo,
    public roles
  ){}
}

export class UserList{
  constructor(
    public id,
    public following:boolean,
    public nick,
    public follow,
    public followers,
    public img
  ){}

}

const URL = 'users/';

@Injectable()
export class UserService{
  private users=[];
  private logueado:boolean = false;
  private idUserLogued:number = 0;
  private lastId:number = 4;

  constructor(
    private http:Http
  ){}

  getIdUserLogued(){
    return this.idUserLogued;
  }
  getLogueado(){
    return this.logueado;
  }

  setId(){
    this.lastId++;
    return this.lastId;
  }
  getLastId(){
    return this.lastId;
  }
  getUserList(){
    return this.http.get(URL)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }

  getUserListByNickAndTipo(nick:string, tipo:string){
    return this.http.get(URL+"nick/"+nick+"/"+tipo)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }


  getUserListByNick(nick:string){
    return this.http.get(URL+"nick/"+nick)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }
  getUserListByTipo(tipo:string){
    return this.http.get(URL+"tipo/"+tipo)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }

  getUserByNick(nick){
    let user = this.users.filter(u => u.nick === nick)[0]
    return withObserver(user);
  }

  login(id){
    this.logueado = true;
    this.idUserLogued = id;
  }

  getUser(id:number){
    return this.http.get(URL+id)
	      .map(response => response.json())
	      .catch(error => this.handleError(error));
  }


  getNick(id:number | string){
    for(let u of this.users){
      if(u.id === id){
        return u.nick;
      }
    }
  }

  logout(){
    this.logueado = false;
    this.idUserLogued = 0;
  }

  nickExist(nick){
    for(let u of this.users){
      if(u.nick === nick){
        return true;
      }
    }
    return false;
  }

  emailExist(mail){
    for(let u of this.users){
      if(u.email === mail){
        return true;
      }
    }
    return false;
  }

  newUser(u:User){
    if(this.nickExist(u.nick)){
      return 1;
    }else if(this.emailExist(u.email)){
      return 2;
    }else{
      this.users.push(u);
      return 0;
    }
  }
  getUserListSearch(palabra:string){
    let list = [];
    this.http.get(URL).subscribe(
      response => {
        list = response.json();

        let busq = palabra.split('+');
        let listFiltrada = [];
        for (let l of list) {
          if ((l.nick.indexOf(busq[0])) > -1) {
            listFiltrada.push(l);
          }
        }
        if(listFiltrada.length===0){
          return [];
        }
        if(busq[6] === 'true' && busq[7] === 'false'){
          let aux = [];
          let u : User;
          for(let u of listFiltrada){

            if(u.tipo == 'particular'){
              aux.push(u);
            }
          }
          listFiltrada = [];
          listFiltrada = aux;
        }
        if(busq[7] === 'true' && busq[6] === 'false'){
          let aux = [];
          let u : User;
          for(let u of listFiltrada){

            if(u.tipo == 'profesional'){
              aux.push(u);
            }
          }
          listFiltrada = [];
          listFiltrada = aux;
        }
        if(busq[7] === 'false' && busq[6] === 'false'){
          return [];
        }
        return listFiltrada;
      }
    );
    return [];
  }

  private handleError(error: any){
    console.error(error);
    return Observable.throw("Server error (" + error.status + "): " + error.text())
  }


}
