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
    new Valoration("Raul","No está mal","Tiene buen aspecto, pero me parece un precio excesivo."),
    new Valoration("David","Buenisimo","¡Me encanta este coche!"),
    new Valoration("Juan","Buen motor","Nunca había visto este modelo de peugueot, es increíble.")
  ];

  constructor(private uService: UserService){}

  getComments(){
    return withObserver(this.comments);
  }

  addComment(comment: Valoration){
    this.comments.push(comment);
  }








}
