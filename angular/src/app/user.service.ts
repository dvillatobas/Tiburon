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
    new User(1,'david','david','villatobas',653546977,'dvd1880@gmail.com','1234','/foto.png','prof','admin')
  ];
  private logueado:boolean = false;

  login(){
    this.logueado = !this.logueado;
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
}
