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
    new Valoration("raul","Muy bueno","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat."),
    new Valoration("david","Buenisimo","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.")
  ];

  constructor(private uService: UserService){}

  getComments(){
    return withObserver(this.comments);
  }

  addComment(comment: Valoration){
    this.comments.push(comment);
  }








}
