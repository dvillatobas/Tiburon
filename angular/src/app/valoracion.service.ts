import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';
import {UserService} from './user.service';
import 'rxjs/Rx';

import {Http, Headers, RequestOptions} from 'angular2/http';



//export class Valoration{
//  constructor(
//    public idUser,
//    public valoracion,
//    public description,
//    public idProducto
//  ){}
//}

export interface Valoration{
    idUser:number;
    valoracion:string;
    description:string;
    idProducto:number;

}

const URL='valorations/';

@Injectable()
export class ValorationService{

//  private comments = [
  //  new Valoration("Raul","vendedor 100% fiable","Muy puntual y amable.",1),
//    new Valoration("Raul","No está mal","Tiene buen aspecto, pero me parece un precio excesivo.",2),
//    new Valoration("David","Buenisimo","¡Me encanta este coche!",1),
//    new Valoration("Juan","Buen motor","Nunca había visto este modelo, es increíble.",3)
//  ];

//  constructor(private uService: UserService){}
  constructor(private http: Http){ }

//  getComments(){
//    return withObserver(this.comments);
//  }

//  addComment(comment: Valoration){
//    this.comments.push(comment);
//  }

getValoration(idProducto: number | string) {
    return this.http.get(URL+idProducto)
      .map(response => response.json())
      .catch(error => this.handleError(error));
}

getValorations(idProducto: number | string) {
    return this.http.get(URL+idProducto)
      .map(response => response.json())
      .catch(error => this.handleError(error));
}
getValorations() {
    return this.http.get(URL)
      .map(response => response.json())
      .catch(error => this.handleError(error));
}

saveValoration(valoration: Valoration) {

    let body = JSON.stringify(valoration);
    let headers = new Headers({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });

    return this.http.post(URL, body, options)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }



private handleError(error: any){
      console.error(error);
      return Observable.throw("Server error (" + error.status + "): " + error.text())
    }



}
