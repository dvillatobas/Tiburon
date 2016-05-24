import {Component,OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';
import {UserService,User} from './user.service';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {MultipartItem} from "./multipart-upload/multipart-item";
import {MultipartUploader} from "./multipart-upload/multipart-uploader";

@Component({
  selector: 'main',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/login.component.html'

})

export class LoginComponent implements OnInit{

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
  private file: File;

	private images: String;


  constructor(private router:Router,private uService : UserService,private http: Http){}


  entrar(event:any,nick:string,pass:string){
    event.preventDefault();
    this.resetAlarms();
    this.uService.getUserByNick(nick).subscribe(
      user => {
        if (user != undefined && user.nick === nick && user.pass === pass){
          this.uService.login(user.id);
          this.router.navigate(['Inicio']);
        }else{
          this.failLogin = true;
        }
      },
      error => {
        console.log(error)
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

    let error = this.uService.newUser(new User(this.uService.setId,nickR,nombreR,apellidosR,telR,emailR,passR,imgR,typeR,'normal'));
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

  //Subida de imagenes
  ngOnInit(){
		this.loadImages();
	}

	loadImages(){

		this.http.get("/images").subscribe(
			response => this.images = response.json()
		);
	}

  selectFile($event) {
		this.file = $event.target.files[0];
		console.debug("Selected file: " + this.file.name + " type:" + this.file.size + " size:" + this.file.size);
	}

	upload() {

		console.debug("Uploading file...");

		if (this.file == null){
			console.error("You have to select a file and set a description.");
			return;
		}

		let formData = new FormData();
		formData.append("file",  this.file);

		let multipartItem = new MultipartItem(new MultipartUploader({url: '/image/upload'}));

		multipartItem.formData = formData;

		multipartItem.callback = (data, status, headers) => {

			if (status == 200){
				console.debug("File has been uploaded");
				this.loadImages();
			} else {
				console.error("Error uploading file");
			}
		};

		multipartItem.upload();
	}

}
