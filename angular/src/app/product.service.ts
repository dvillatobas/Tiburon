import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';
import {UserService,User} from './user.service';


export class Product {
  constructor(
    public id,
    public publicDate,
    public name,
    public used,
    public year,
    public location,
    public img,
    public price,
    public user:User,
    public type,
    public description
    ) { }
}

const URL = 'https://localhost:8443/products/';

@Injectable()
export class ProductService {
  private newestProducts = this.getNewestList();
  constructor(
    private uService: UserService,
    private http:Http
    ) { }

  getNewestList() {
    return this.http.get(URL+'news')
      .map(response => response.json());
  }

  getProductList() {
    return this.http.get(URL)
      .map(response => response.json());
  }

  /*
  exist(id){
    if(id<=this.lastId){
      for(let p of this.products){
        if(p.id === id){
          return true;
        }
      }
    }
    return false;

  }*/

  getProductById(id: number | string) {
    return this.http.get(URL+id)
      .map(response => response.json());

  }

  getProductListUser(user:User) {
    let url = URL + 'productsUser';
    let body = JSON.stringify(user);
    let headers = new Headers({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });

    return this.http.put(url, body, options)
      .map(response => response.json());
  }
  getProductListUsers(users:User[]) {
    let url = URL + 'getProductsByUsers';
    let body = JSON.stringify(users);
    let headers = new Headers({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });

    return this.http.put(url, body, options)
      .map(response => response.json());
  }
/*
  getProductListSearch(palabra: string) {
    let busq = palabra.split('+');


    let listFiltrada = [];

    for (let i = 0; i < this.products.length; i++) {

      if ((this.products[i].name.indexOf(busq[0])) > -1) {
        listFiltrada.push(this.products[i]);
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


  }*/

  update(product: Product) {
    let url = URL + 'update';
    let body = JSON.stringify(product);
    let headers = new Headers({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });

    return this.http.put(url, body, options)
      .map(response => response.json());
  }

  del(idProduct: number | string) {
    let url = URL + 'delete';
    let body = JSON.stringify(idProduct);
    let headers = new Headers({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });

    return this.http.put(url,body,options)
      .map(response => response.json());
  }

  add(p:Product){
    let url = URL + 'add';
    let body = JSON.stringify(p);
    let headers = new Headers({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });

    return this.http.post(url, body, options)
      .map(response => response.json());
  }







}
