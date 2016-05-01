import {Injectable} from 'angular2/core';
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
    public idUser,
    public type,
    public description

    ) { }
}

@Injectable()
export class ProductService {
  private products = [
    new Product(1, Date.now(), 'dodge charger', 20000, 1969, 'Burgos', '/imagenes/1.jpg', 54000, 1, 'car', 'Utilizado en la pelicula "fast and furious", no ha tenido ningún golpe, tiene barras antivuelco, asientos deportivos, escape remux, frenos brembo competicion SX, amortiguadores blistein sport de dureza regulable, todo homologado para calle .'),
    new Product(2, Date.now() + 2, 'chevrolet camaro', 155879, 2001, 'Badajoz', '/imagenes/coches/857376chevrolet_camaro_ss_1967.jpg', 65000, 2, 'car', 'De importación, recien matriculado en España, un solo propietario, kms certificados, correas recien cambiadas, neumaticos nuevos .'),
    new Product(3, Date.now(), 'ford mustang', 15400, 1971, 'Madrid', '/imagenes/coches/IMG_20130319_170123_HDR.jpg', 35500, 3, 'car', 'Tapicería de cuero, llantas originales, sin dirección asistida, repintado hace un mes incluido transferencia en el precio, no negociable.'),
    new Product(4, Date.now() + 5, 'turbocompresor-garret g-234', 254675, 2004, 'Murcia', '/imagenes/piezas/turbocompresor-garret.jpg', 600, 4, 'piece', 'Presión mínima 0.5 Bar, max 1.8 Bar,no tiene garantía, entrega en mano, precio no negociable.'),
    new Product(5, Date.now(), 'faros delanteros R laguna', 0, 2003, 'Ávila', '/imagenes/piezas/fk_daylight_scheinwerfer_renault_laguna_fkfsrn010023.jpg', 240, 1, 'piece', 'descripcion: Antinieblas no incorporado, bombillas H7, luces de posición led, homologado para uso de calle, sin problemas para ITV, motores de regulación en altura no incluidos.'),

  ];
  private lastId: number = 5;
  private newestProducts = this.getNewestList();
  constructor(
    private uService: UserService
    ) { }

  setId() {
    this.lastId++;
    return this.lastId;
  }



  getNewestList() {
    let list = this.products.sort(
      (n1, n2) => {
        if (n1.publicDate > n2.publicDate) { return 1; }
        if (n1.publicDate < n2.publicDate) { return -1; }
        return 0;
      }
    );
    return withObserver(list);
  }
  getProductList() {
    return withObserver(this.products);
  }

  exist(id){
    if(id<=this.lastId){
      for(let p of this.products){
        if(p.id === id){
          return true;
        }
      }
    }
    return false;

  }

  getProductById(id: number | string) {
    let product = this.products.filter(c => c.id === +id)[0];
    return withObserver(new Product(product.id, product.publicDate, product.name, product.used, product.year, product.location, product.img,
      product.price, product.idUser, product.type, product.description));

  }

  getProductListUser(id: number) {
    let list = [];

    for (let p of this.products) {
      if (p.idUser === id) {
        list.push(p);
      }
    }
    return withObserver(list);
  }

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


  }

  saveProduct(product: Product) {
    if (product.id) {
      let oldProduct = this.products.filter(c => c.id === product.id)[0];
      oldProduct.name = product.name;
        oldProduct.used = product.used;
      oldProduct.location = product.location;
      oldProduct.price = product.price;
      oldProduct.year = product.year;
      oldProduct.description = product.description;
      oldProduct.img = product.img;
    }
    else {
      product.id = this.setId();
      if((product.used == 0) ){
        product.used = 'Nuevo';
      }
      product.idUser = this.uService.getIdUserLogued();
      this.products.push(product);
    }
    return withObserver(product);
  }

  deleteProduct(idProduct: number | string) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === idProduct) {
        this.products.splice(i, 1);
        break;
      }
    }
    return withObserver(undefined);
  }









}
