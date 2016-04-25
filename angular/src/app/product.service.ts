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
    new Product(3,Date.now(),'ford',20000, 1990,'Madrid','/imagenes/1.jpg',54000, 3,'profesional', 'descripcion: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
    new Product(4,Date.now()+5,'fiat',20000, 2004,'Madrid','/imagenes/1.jpg',54000, 4,'particular', 'descripcion: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
    new Product(5,Date.now(),'fiat',2000, 2000,'Madrid','/imagenes/1.jpg',54000, 1,'particular', 'descripcion: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
  ];
  private lastId:number=5;
  private newestProducts = this.getNewestList();
  constructor(
    private uService: UserService
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

  getProductById(id:number | string){
    let product = this.products.filter(c => c.id === +id)[0];
    return withObserver(new Product(product.id, product.publicDate, product.name, product.used, product.year, product.location, product.img,
      product.price, product.idUser, product.type,product.description));

  }

  getProductListUser(id:number){
    let list = [];

    for(let p of this.products){
      if(p.idUser===id){
        list.push(p);
      }
    }
    console.log(list.length);
    return list;
  }

  getProductListSearch(palabra: string){
    let listFiltrada = [];

    for(let i=0; i<this.products.length;i++){
      console.log("for");
      if((this.products[i].name.indexOf(palabra)) > -1){
        listFiltrada.push(this.products[i]);

      }
    }
    if(listFiltrada.length == 0){
      //window.confirm("no se han encontrado resultados");
      listFiltrada = this.getProductList();

    }

      return listFiltrada;


  }

saveProduct(product: Product){
  if(product.id){
    let oldProduct = this.products.filter(c => c.id === product.id)[0];
    oldProduct.name = product.name;
    oldProduct.used = product.used;
    oldProduct.location = product.location;
    oldProduct.price = product.price;
    oldProduct.year = product.year;
    oldProduct.description = product.description;
    oldProduct.img = product.img;
  }
  else{
    product.id = this.products.length+1;
    product.idUser = this.uService.getIdUserLogued();
    this.products.push(product);
  }
  return withObserver(product);
}

deleteProduct(idProduct: number | string){
  for(let i=0; i<this.products.length;i++){
    if(this.products[i].id === idProduct){
      this.products.splice(i,1);
      break;
    }
  }
return withObserver(undefined);
}










}
