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
}

@Injectable()
export class UserService{
  private users = [
    new User(1,'david','david','villatobas',653546977,'dvd1880@gmail.com','1234','/foto.png','prof','admin'),
    new User(2,'juan','juan','villatobas',653546977,'dvd1880@gmail.com','1234','/foto.png','prof','normal'),
    new User(3,'luis','luis','villatobas',653546977,'dvd1880@gmail.com','1234','/foto.png','prof','normal'),
    new User(4,'raul','raul','villatobas',653546977,'dvd1880@gmail.com','1234','/foto.png','prof','normal')
  ];
  private logueado:boolean = false;
  private idUser:number = 0;

  login(){
    this.logueado = !this.logueado;
    this.idUser = 2;
  }
  isUserCorrect(user:string, pass:string){
    let u:User = null;
    for(let us of this.users){
      if (us.nick === user) {
        u=us;
      }
    }
    if (u!=null){
      return u.pass === pass;
    }else{
      return false;
    }
  }
  getUser(id){
    for(let u of this.users){
      if(u.id===id){
        return u;
      }
      return undefined;
    }
  }
}
