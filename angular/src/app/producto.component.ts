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
  private uService: UserService;

  constructor(private vService: ValorationService, private router:Router//private service : UserService
  ){}

  ngOnInit(){
    this.vService.getComments().subscribe(
        comments => this.comments = comments,
        error => console.log(error)
    );

  }

  addValoration(valoracion: string,description: string){
    let comment = new Valoration(1,valoracion,description);
    this.vService.addComment(comment);
    this.ngOnInit();

    //this.comments.push(new Valoration(1,valoracion,description));
  }
}
