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
  private valoraciones = [];
  private user: User;
  private error: boolean = false;
  constructor(
    private vService: ValorationService,
    private router: Router,
    private routeParams: RouteParams,
    private uService: UserService,
    private pService: ProductService
    ) {


  }
  ngOnInit() {
    let id = +this.routeParams.get('id');
    this.pService.getProductById(id).subscribe(
      prod => {
        this.product = prod;
        this.user = this.product.user;
        this.vService.get(this.product).subscribe(
          comments => this.valoraciones = comments,
          error => console.log(error)
          );
      },
      error => {
        console.log(error);
      }
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
    console.log('add ' + valoracion + ' ' + description)
    if(this.uService.getLogueado()){
      if ((valoracion == '') || (description == '')) {
        window.confirm("Debes rellenar todos los campos");
      }
      else {
        let comment = new Valoration(1, this.uService.getUserLogued(), valoracion, description, this.product);
        this.vService.add(comment).subscribe(
          ok => this.ngOnInit()
        );

      }
  }
  else{
    this.router.navigate(['Login']);
  }


    //this.comments.push(new Valoration(1,valoracion,description));

  }

}
