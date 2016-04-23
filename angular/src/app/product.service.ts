import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';
import {UserService} from './user.service';


export class Product{
  constructor(
    public id,
    public publicDate,
    public name,
    public used,
    public year,
    public location,
    public img,
    public price,
    public idUser,
    public type,
    public description

  ){}
}

@Injectable()
export class ProductService{
  private products = [
    new Product(1,Date.now(),'camaro',20000, 2000,'Madrid','/imagenes/1.jpg',54000, 1,'particular', 'descripcion: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
    new Product(2,Date.now()+2,'peugueot',10000, 2010,'Madrid','/imagenes/1.jpg',54000, 2,'particular', 'descripcion: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
    new Product(3,Date.now(),'ford',0, 0,'Madrid','/imagenes/1.jpg',54000, 3,'profesional', 'descripcion: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
    new Product(4,Date.now()+5,'pieza',0, 0,'Madrid','/imagenes/1.jpg',54000, 4,'particular', 'descripcion: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
    new Product(5,Date.now(),'fiat',20000, 2000,'Madrid','/imagenes/1.jpg',54000, 2,'particular', 'descripcion: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
  ];
  private lastId:number=5;
  private newestProducts = this.getNewestList();
  constructor(
    private usr: UserService
  ){}

  setId(){
    this.lastId++;
    return this.lastId;
  }

  getNewestList(){
    return this.products.sort(
      (n1,n2) => {
        if (n1.publicDate > n2.publicDate) {  return 1;  }
        if (n1.publicDate < n2.publicDate) {  return -1;   }
        return 0;
      }
    );
  }
  getProductList(){
    return this.products;
  }













}
