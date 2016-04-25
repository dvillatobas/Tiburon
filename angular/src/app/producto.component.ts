import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';
import {UserService} from './user.service';
import {ValorationComponent} from './valoracion.component';
import {Valoration, ValorationService} from './valoracion.service';

@Component({
  selector: 'main',
  directives: [ROUTER_DIRECTIVES, ValorationComponent],
  templateUrl: 'app/producto.component.html',
  providers: [ValorationService, UserService]

})

export class ProductoComponent implements OnInit{

  private comments: Valoration[] = [];


  constructor(private vService: ValorationService, private router:Router,private uService : UserService

  ){}

  ngOnInit(){
    this.vService.getComments().subscribe(
        comments => this.comments = comments,
        error => console.log(error)
    );

  }

  addValoration(valoracion: string,description: string){

    console.log(this.uService.getLogueado());
    //  this.router.navigate(['Login']);

      if((valoracion == '') || (description == '')){
        window.confirm("Debes rellenar todos los campos");
      }
      else{
        let comment = new Valoration(this.uService.getIdUserLogued(),valoracion,description);
        this.vService.addComment(comment);
        this.ngOnInit();
      }


    //this.comments.push(new Valoration(1,valoracion,description));
  }
}
