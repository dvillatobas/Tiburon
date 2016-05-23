import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';
import {UserService, User} from './user.service';
import {Product} from './product.service';
import 'rxjs/Rx';


export class Valoration{
  constructor(
    public id,
    public user:User,
    public valoration,
    public description,
    public product:Product
  ){}
}

@Injectable()
export class ValorationService{


  constructor(private uService: UserService){}

  getComments(){
    return withObserver(this.comments);
  }

  addComment(comment: Valoration){
    this.comments.push(comment);
  }








}
