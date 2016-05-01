System.register(['angular2/core', 'angular2/router', './mensajes.service', './user.service', 'ng2-bootstrap/ng2-bootstrap'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, mensajes_service_1, user_service_1, ng2_bootstrap_1;
    var MensajesComponent, Wisp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (mensajes_service_1_1) {
                mensajes_service_1 = mensajes_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            }],
        execute: function() {
            MensajesComponent = (function () {
                function MensajesComponent(router, param, mService, uService) {
                    this.router = router;
                    this.param = param;
                    this.mService = mService;
                    this.uService = uService;
                    this.fecha = Date.now();
                    this.isCollapsed = false;
                    this.chatList = [];
                    this.contactList = [];
                    this.mostrarChat = false;
                    if (this.uService.getIdUserLogued() === 0) {
                        this.router.navigate(['Login']);
                    }
                    this.refreshContactList();
                    var id = +this.param.get('id');
                    if (id != 0 && this.uService.getIdUserLogued() != 0 && id != this.uService.getIdUserLogued()) {
                        this.selectChat(id);
                    }
                }
                MensajesComponent.prototype.selectChat = function (id) {
                    var _this = this;
                    this.chatList = [];
                    this.uService.getUser(id).subscribe(function (user) { return _this.usuario = user; }, function (error) { return console.log(); });
                    this.uService.getUser(this.uService.getIdUserLogued()).subscribe(function (user) { return _this.yo = user; }, function (error) { return console.log(); });
                    var lista = [];
                    this.mService.getChatList(id).subscribe(function (list) { return lista = list; }, function (error) { return console.log(error); });
                    for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
                        var w = lista_1[_i];
                        if (w.idEmisor === id) {
                            this.chatList.push(new Wisp(this.usuario.nick, w.mensaje, w.date, 'list-group-item received'));
                        }
                        else {
                            this.chatList.push(new Wisp(this.yo.nick, w.mensaje, w.date, 'list-group-item sent'));
                        }
                    }
                    if (lista.length === 0) {
                        this.chatList.push(new Wisp('', 'Nuevo chat con ' + this.usuario.nick, Date.now(), 'list-group-item center-block'));
                    }
                    this.refreshContactList();
                };
                MensajesComponent.prototype.enviar = function (borrador) {
                    this.mService.nuevo(this.usuario.id, borrador);
                    this.selectChat(this.usuario.id);
                };
                MensajesComponent.prototype.refreshContactList = function () {
                    var _this = this;
                    this.contactList = [];
                    this.mService.getContactList(this.uService.getIdUserLogued()).subscribe(function (list) { return _this.contactList = list; }, function (error) { return console.log(error); });
                };
                MensajesComponent = __decorate([
                    core_1.Component({
                        selector: 'main',
                        directives: [router_1.ROUTER_DIRECTIVES, ng2_bootstrap_1.Collapse],
                        templateUrl: 'app/mensajes.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, mensajes_service_1.MensajesService, user_service_1.UserService])
                ], MensajesComponent);
                return MensajesComponent;
            }());
            exports_1("MensajesComponent", MensajesComponent);
            Wisp = (function () {
                function Wisp(nick, mensaje, date, rem) {
                    this.nick = nick;
                    this.mensaje = mensaje;
                    this.date = date;
                    this.rem = rem;
                }
                return Wisp;
            }());
            exports_1("Wisp", Wisp);
        }
    }
});
//# sourceMappingURL=../../../app/mensajes.component.js.map