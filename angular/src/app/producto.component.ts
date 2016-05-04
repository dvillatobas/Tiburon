import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {UserService, User} from './user.service';
import {Product, ProductService} from './product.service';
import {ValorationComponent} from './valoracion.component';
import {Valoration, ValorationService} from './valoracion.service';

@Component({
  selector: 'main',
  directives: [ROUTER_DIRECTIVES, ValorationComponent],
  templateUrl: 'app/producto.component.html'


})

export class ProductoComponent implements OnInit {
  private product: Product;
  private comments: Valoration[] = [];
  private user: User;
  private error: boolean = false;
  constructor(
    private vService: ValorationService,
    private router: Router,
    private routeParams: RouteParams,
    private uService: UserService,
    private pService: ProductService
    ) {
    let id = +this.routeParams.get('id');
    if (this.pService.exist(id)) {
      this.pService.getProductById(+this.routeParams.get('id')).subscribe(
        prod => {
          this.product = prod
        },
        error => {
          console.log(error);
        }
        );
      this.uService.getUser(this.product.idUser).subscribe(
        usr => this.user = usr,
        error => console.log(error)
        );
    } else {
      this.error = true;
    }

  }
  ngOnInit() {
    this.vService.getComments().subscribe(
      comments => this.comments = comments,
      error => console.log(error)
      );

  }

  volver() {
    window.history.back();
  }
  mensaje() {
    if (this.uService.getIdUserLogued() != this.user.id) {
      this.router.navigate(['Mensajes', { id: this.user.id }]);
    }
  }
  addValoration(valoracion: string, description: string) {

    if(this.uService.getLogueado()){
    //  this.router.navigate(['Login']);

      if ((valoracion == '') || (description == '')) {
        window.confirm("Debes rellenar todos los campos");
      }
      else {
<<<<<<< HEAD
        let comment = new Valoration(this.uService.getNick(this.uService.getIdUserLogued()), valoracion, description, this.product.id);
=======
        let comment = new Valoration(this.uService.getNick(this.uService.getIdUserLogued()), valoracion, description,this.product.id);
        console.log(comment.idProducto);
>>>>>>> f3_arreglos_carlos2
        this.vService.addComment(comment);
        this.ngOnInit();
      }
  }
  else{
    this.router.navigate(['Login']);
  }


    //this.comments.push(new Valoration(1,valoracion,description));

  }

}
