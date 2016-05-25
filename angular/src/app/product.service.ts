import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {withObserver} from './utils';
import {UserService,User} from './user.service';
import 'rxjs/Rx';


export interface Product {

  id?: number;
  publicDate: string;
  name: string;
  used: number;
  year: number;
  location: string;
  img: string;
  price: number;
  idUser: number;
	type: string;
  description: string;
}

const URL = 'products/';

@Injectable()
export class ProductService {

  //private lastId: number = 5;
  private newestProducts = this.getNewestList();
  constructor(private uService: UserService,private http: Http) { }

  /*setId() {
    this.lastId++;
    return this.lastId;
  }
*/
  getProductList() {
    return this.http.get(URL)
      .map(response => response.json());
      //.catch(error => this.handleError(error));
  }

  getProductById(id: number) {

    return this.http.get(URL+id)
      .map(response => response.json())
      .catch(error => this.handleError(error));

  }

  saveProduct(product: Product) {

    let body = JSON.stringify(product);
    let headers = new Headers({
      'Content-Type': 'application/json',
      'X-Request-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });

    return this.http.post(URL,body,options)
      .map(response => response.json());
      //.catch(error => this.handleError(error));
  }

  deleteProduct(idProduct: number | string) {

    let headers = new Headers({
	   'X-Requested-With': 'XMLHttpRequest'
	});
	let options = new RequestOptions({ headers });
    return this.http.delete(URL+idProduct,options)
      .map(response => undefined);
      //.catch(error => this.handleError(error));
  }


  getNewestList() {
    return this.getProductList();
    /*let list = this.products.sort(
      (n1, n2) => {
        if (n1.publicDate > n2.publicDate) { return 1; }
        if (n1.publicDate < n2.publicDate) { return -1; }
        return 0;
      }
    );
    return withObserver(list);*/
  }


/*  exist(id){
    if(id<=this.lastId){
      for(let p of this.products){
        if(p.id === id){
          return true;
        }
      }
    }
    return false;

  }
*/


  getProductListUser(idUser: number) {

    return this.http.get(URL+"productsUser/"+idUser)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }

  getProductListSearch(palabra: string) {
    let busq = palabra.split('+');
    let productos = this.getProductList().subscribe(
      prod => productos = prod,
      error => console.log(error)
    );

    let listFiltrada = [];

    for (let i = 0; i < productos.length; i++) {

      if ((productos[i].name.indexOf(busq[0])) > -1) {
        listFiltrada.push(productos[i]);
      }
    }
    if(listFiltrada.length===0){
      return withObserver([]);
    }
    if(busq[2] != ''){
      let aux = [];
      for(let p of listFiltrada){
        if(p.price >= +busq[2]){
          aux.push(p);
        }
      }
      listFiltrada = [];
      listFiltrada = aux;
    }

    if(busq[3] != ''){
      let aux = [];
      for(let p of listFiltrada){
        if(p.price <= +busq[3]){
          aux.push(p);
        }
      }
      listFiltrada = [];
      listFiltrada = aux;
    }

    if(busq[4] != 'ambos'){
      let aux = [];
      for(let p of listFiltrada){
        if(p.type == busq[4]){
          aux.push(p);
        }
      }
      listFiltrada = [];
      listFiltrada = aux;
    }
    if(busq[5] != ''){
      let aux = [];
      for(let p of listFiltrada){
        if(p.location == busq[5]){
          aux.push(p);
        }
      }
      listFiltrada = [];
      listFiltrada = aux;
    }
    if(busq[6] === 'true' && busq[7] === 'false'){
      let aux = [];
      let u : User;
      for(let p of listFiltrada){
        this.uService.getUser(p.idUser).subscribe(
          us => u = us,
          error => console.log(error)
        );
        if(u.tipo == 'particular'){
          aux.push(p);
        }
      }
      listFiltrada = [];
      listFiltrada = aux;
    }
    if(busq[7] === 'true' && busq[6] === 'false'){
      let aux = [];
      let u : User;
      for(let p of listFiltrada){
        this.uService.getUser(p.idUser).subscribe(
          us => u = us,
          error => console.log(error)
        );
        if(u.tipo == 'profesional'){
          aux.push(p);
        }
      }
      listFiltrada = [];
      listFiltrada = aux;
    }
    if(busq[7] === 'false' && busq[6] === 'false'){
      return withObserver([]);
    }


    return withObserver(listFiltrada);


  }

  private handleError(error: any){
    console.error(error);
    return Observable.throw("Server error (" + error.status + "): " + error.text())
  }

}
