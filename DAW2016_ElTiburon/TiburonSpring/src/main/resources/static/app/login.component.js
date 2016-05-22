System.register(['angular2/core', 'angular2/router', './user.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, user_service_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(router, uService) {
                    this.router = router;
                    this.uService = uService;
                    this.failNickFormat = false;
                    this.failNickExist = false;
                    this.failEmailEquals = false;
                    this.failEmailExist = false;
                    this.failEmailFormat = false;
                    this.failPassFormat = false;
                    this.failPassEquals = false;
                    this.failType = false;
                    this.userCreated = false;
                    this.failLogin = false;
                }
                LoginComponent.prototype.entrar = function (event, nick, pass) {
                    var _this = this;
                    event.preventDefault();
                    this.resetAlarms();
                    this.uService.getUserByNick(nick).subscribe(function (user) {
                        if (user != undefined && user.nick === nick && user.pass === pass) {
                            _this.uService.login(user.id);
                            _this.router.navigate(['Inicio']);
                        }
                        else {
                            _this.failLogin = true;
                        }
                    }, function (error) {
                        console.log(error);
                    });
                };
                LoginComponent.prototype.resetAlarms = function () {
                    this.failNickFormat = false;
                    this.failNickExist = false;
                    this.failEmailEquals = false;
                    this.failEmailExist = false;
                    this.failEmailFormat = false;
                    this.failPassFormat = false;
                    this.failPassEquals = false;
                    this.failType = false;
                    this.userCreated = false;
                    this.failLogin = false;
                };
                LoginComponent.prototype.registrar = function (nickR, nombreR, apellidosR, telR, imgR, typeR, emailR, email2R, passR, pass2R) {
                    this.resetAlarms();
                    if (nickR.length < 3) {
                        this.failNickFormat = true;
                        return 0;
                    }
                    else if (emailR.length < 3) {
                        this.failEmailFormat = true;
                        return 0;
                    }
                    else if (emailR != email2R) {
                        this.failEmailEquals = true;
                        return 0;
                    }
                    else if (passR != pass2R) {
                        this.failPassEquals = true;
                        return 0;
                    }
                    else if (passR.length < 4) {
                        this.failPassFormat = true;
                        return 0;
                    }
                    else if (typeR === '0') {
                        this.failType = true;
                        return 0;
                    }
                    var error = this.uService.newUser(new user_service_1.User(this.uService.setId, nickR, nombreR, apellidosR, telR, emailR, passR, imgR, typeR, 'normal'));
                    if (error === 0) {
                        this.userCreated = true;
                        this.classInicio = 'inicioSesion';
                        this.classRegistro = 'registro';
                    }
                    else if (error === 1) {
                        this.failNickExist = true;
                    }
                    else if (error === 2) {
                        this.failEmailExist = true;
                    }
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'main',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        templateUrl: 'app/login.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService])
                ], LoginComponent);
                return LoginComponent;
            })();
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=../../../app/login.component.js.map