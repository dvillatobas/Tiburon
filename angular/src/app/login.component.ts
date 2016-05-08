import {Component}   from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';
import {UserService,User} from './user.service';

@Component({
  selector: 'main',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/login.component.html'

})

export class LoginComponent{

  private failNickFormat:boolean=false;
  private failNickExist:boolean=false;
  private failEmailEquals:boolean=false;
  private failEmailExist:boolean=false;
  private failEmailFormat:boolean=false;
  private failPassFormat:boolean=false;
  private failPassEquals:boolean=false;
  private failType:boolean=false;
  private userCreated:boolean = false;
  private failLogin:boolean = false;

  private classInicio;
  private classRegistro;


  constructor(
    private router:Router,
    private uService : UserService
  ){}

  entrar(event:any,nick:string,pass:string){
    event.preventDefault();
    this.resetAlarms();
    this.uService.login(nick,pass).subscribe(
      user => {
        console.log(user);
        this.router.navigate(['Inicio']);
      },
      error => {
        this.failLogin = true;
      }
    );
  }
  resetAlarms(){
     this.failNickFormat=false;
     this.failNickExist=false;
     this.failEmailEquals=false;
     this.failEmailExist=false;
     this.failEmailFormat=false;
     this.failPassFormat=false;
     this.failPassEquals=false;
     this.failType=false;
     this.userCreated= false;
     this.failLogin = false;
  }



  registrar(nickR:string,nombreR:string,apellidosR:string,telR:string,imgR:string,typeR:string,emailR:string,email2R:string,passR:string,pass2R:string){
    this.resetAlarms();
    if(nickR.length<3){
      this.failNickFormat=true;
      return 0;
    }else if(emailR.length<3){
      this.failEmailFormat=true;
      return 0;
    }else if(emailR!=email2R){
      this.failEmailEquals=true;
      return 0;
    }else if(passR!=pass2R){
      this.failPassEquals=true;
      return 0;
    }else if(passR.length<4){
      this.failPassFormat=true;
      return 0;
    }else if(typeR==='0'){
      this.failType=true;
      return 0;
    }

    let error = this.uService.newUser(new User(this.uService.setId,nickR,nombreR,apellidosR,telR,emailR,imgR,typeR,['normal']));
    if(error===0){
      this.userCreated=true;
      this.classInicio = 'inicioSesion';
      this.classRegistro = 'registro';
    }else if(error === 1){
      this.failNickExist=true;
    }else if(error === 2){
      this.failEmailExist=true;
    }
  }
}
