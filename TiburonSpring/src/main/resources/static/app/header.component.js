System.register(['angular2/core', 'angular2/router', './user.service', './mensajes.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, user_service_1, mensajes_service_1;
    var HeaderComponent;
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
            },
            function (mensajes_service_1_1) {
                mensajes_service_1 = mensajes_service_1_1;
            }],
        execute: function() {
            HeaderComponent = (function () {
                function HeaderComponent(router, usr, msj) {
                    this.router = router;
                    this.usr = usr;
                    this.msj = msj;
                }
                HeaderComponent.prototype.inicio = function () {
                    this.router.navigate(['Inicio']);
                };
                HeaderComponent.prototype.misprod = function () {
                    this.router.navigate(['MisProductos']);
                };
                HeaderComponent.prototype.mensajes = function () {
                    this.router.navigate(['Mensajes']);
                };
                HeaderComponent.prototype.login = function () {
                    this.router.navigate(['Login']);
                };
                HeaderComponent.prototype.logout = function () {
                    this.usr.logout();
                };
                HeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'header',
                        templateUrl: 'app/header.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService, mensajes_service_1.MensajesService])
                ], HeaderComponent);
                return HeaderComponent;
            })();
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});
//# sourceMappingURL=../../../app/header.component.js.map