import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';
import {UserService} from './user.service';
import 'rxjs/Rx';


export class Valoration{
  constructor(
    public idUser,
    public valoracion,
    public description,
    public idProducto
  ){}
}

@Injectable()
export class ValorationService{

  private comments = [
    new Valoration("Raul","vendedor 100% fiable","Muy puntual y amable.",1),
    new Valoration("Raul","No está mal","Tiene buen aspecto, pero me parece un precio excesivo.",2),
    new Valoration("David","Buenisimo","¡Me encanta este coche!",1),
    new Valoration("Juan","Buen motor","Nunca había visto este modelo, es increíble.",3)
  ];

  constructor(private uService: UserService){}

  getComments(){
    return withObserver(this.comments);
  }

  addComment(comment: Valoration){
    this.comments.push(comment);
  }








}
