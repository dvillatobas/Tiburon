import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';

export class User{
  constructor(
    public id,
    public nick,
    public nombre,
    public apellidos,
    public telefono,
    public email,
    public pass,
    public img,
    public tipo,
    public rol
  ){}
  getId(){
    return this.id;
  }
  getNick(){
    return this.nick;
  }
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

@Injectable()
export class UserService{
  private users = [
    new User(1,'david','david','villatobas',653546977,'dvd1880@gmail.com','1234','/imagenes/users/foto2.jpg','profesional','admin'),
    new User(2,'juan','juan','villatobas',653546977,'dvd1880@gmail.com','1234','/imagenes/users/foto1.jpg','particular','normal'),
    new User(3,'luis','luis','villatobas',653546977,'dvd1880@gmail.com','1234','/imagenes/users/foto1.jpg','profesional','normal'),
    new User(4,'raul','raul','villatobas',653546977,'dvd1880@gmail.com','1234','/imagenes/users/foto2.jpg','particular','normal')
  ];
  private logueado:boolean = false;
  private idUserLogued:number = 0;
  private lastId:number = 4;

  getIdUserLogued(){
    return this.idUserLogued;
  }

  setId(){
    this.lastId++;
    return this.lastId;
  }
  getLastId(){
    return this.lastId;
  }
  getUserList(){
    return this.users;
  }

  isUserCorrect(user:string, pass:string){
    let u:User = null;
    for(let us of this.users){
      if (us.nick === user) {
        u=us;
      }
    }
    if (u!=null){
      this.logueado = !this.logueado;
      this.idUserLogued = u.id;
      return u.pass === pass;
    }else{
      return false;
    }
  }
  getUser(id:number){
    for(let u of this.users){
      if(u.id===id){
        return u;
      }
    }
    return undefined;
  }

  logout(){
    this.logueado = ! this.logueado;
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


}
