import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';
import {UserService} from './user.service';
import 'rxjs/Rx';


export class Valoration{
  constructor(
    public idUser,
    public valoracion,
    public description
  ){}
}

@Injectable()
export class ValorationService{
  private comments = [
    new Valoration(1,"prueba comentario 1","blalbalba"),
    new Valoration(1,"prueba comentario 2","blalbalba")
  ];

  constructor(private uService: UserService){}

  getComments(){
    return withObserver(this.comments);
  }

  addComment(comment: Valoration){
    this.comments.push(comment);
  }








}
