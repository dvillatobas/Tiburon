System.register(['angular2/core', './utils', './user.service'], function(exports_1, context_1) {
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
    var core_1, utils_1, user_service_1;
    var Mensaje, Contact, MensajesService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (utils_1_1) {
                utils_1 = utils_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            Mensaje = (function () {
                function Mensaje(id, date, idEmisor, idReceptor, mensaje, estado) {
                    this.id = id;
                    this.date = date;
                    this.idEmisor = idEmisor;
                    this.idReceptor = idReceptor;
                    this.mensaje = mensaje;
                    this.estado = estado;
                }
                return Mensaje;
            }());
            exports_1("Mensaje", Mensaje);
            Contact = (function () {
                function Contact(user, unread) {
                    this.user = user;
                    this.unread = unread;
                }
                return Contact;
            }());
            exports_1("Contact", Contact);
            MensajesService = (function () {
                function MensajesService(usr) {
                    this.usr = usr;
                    this.mensajes = [
                        new Mensaje(1, Date.now(), 1, 2, '¿aceptas cambio por una moto + dinero?', 'unread'),
                        new Mensaje(3, Date.now() + 3, 3, 2, '¿Puedes quedar el viernes por la tarde?', 'unread'),
                        new Mensaje(2, Date.now() + 2, 2, 1, 'No, gracias por tu interes', 'unread'),
                        new Mensaje(4, Date.now() + 4, 4, 1, '¿Cuanto pides por él?', 'unread')
                    ];
                    //sin inicializar seria un 0
                    this.lastId = 4;
                }
                MensajesService.prototype.setId = function () {
                    this.lastId++;
                    return this.lastId;
                };
                MensajesService.prototype.getContactList = function (id) {
                    var contactos = [];
                    var u;
                    for (var i = 0; i < this.mensajes.length; i++) {
                        if (id === this.mensajes[i].idEmisor && !this.estaContenido(this.mensajes[i].idReceptor, contactos)) {
                            this.usr.getUser(this.mensajes[i].idReceptor).subscribe(function (user) { return u = user; }, function (error) { return console.log(error); });
                            contactos.push(new Contact(u, this.getUnreadNumber(u.id)));
                        }
                        else if (id === this.mensajes[i].idReceptor && !this.estaContenido(this.mensajes[i].idEmisor, contactos)) {
                            this.usr.getUser(this.mensajes[i].idEmisor).subscribe(function (user) { return u = user; }, function (error) { return console.log(error); });
                            contactos.push(new Contact(u, this.getUnreadNumber(u.id)));
                        }
                    }
                    contactos.sort(function (n1, n2) {
                        if (n1.id > n2.id) {
                            return -1;
                        }
                        if (n1.id < n2.id) {
                            return 1;
                        }
                        return 0;
                    });
                    return utils_1.withObserver(contactos);
                };
                MensajesService.prototype.getChatList = function (id) {
                    var messages = [];
                    for (var _i = 0, _a = this.mensajes; _i < _a.length; _i++) {
                        var m = _a[_i];
                        if (id === m.idEmisor && this.usr.getIdUserLogued() === m.idReceptor) {
                            messages.push(m);
                            this.setMensajeRead(m.id);
                        }
                        else if (id === m.idReceptor && this.usr.getIdUserLogued() === m.idEmisor) {
                            messages.push(m);
                        }
                    }
                    return utils_1.withObserver(messages);
                };
                MensajesService.prototype.setMensajeRead = function (id) {
                    if (id) {
                        var men = this.mensajes.filter(function (c) { return c.id === id; })[0];
                        men.estado = 'read';
                    }
                };
                MensajesService.prototype.getUnreadNumber = function (id) {
                    var cont = 0;
                    for (var _i = 0, _a = this.mensajes; _i < _a.length; _i++) {
                        var m = _a[_i];
                        if (this.usr.getIdUserLogued() === m.idReceptor && m.idEmisor === id && m.estado === 'unread') {
                            cont++;
                        }
                    }
                    return cont;
                };
                MensajesService.prototype.estaContenido = function (id, lista) {
                    if (lista === void 0) { lista = []; }
                    for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
                        var u = lista_1[_i];
                        if (id === u.user.id) {
                            return true;
                        }
                    }
                    return false;
                };
                MensajesService.prototype.nuevo = function (destino, mensaje) {
                    var m = new Mensaje(this.setId(), Date.now(), this.usr.getIdUserLogued(), destino, mensaje, 'unread');
                    this.mensajes.push(m);
                    return utils_1.withObserver(m);
                };
                MensajesService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], MensajesService);
                return MensajesService;
            }());
            exports_1("MensajesService", MensajesService);
        }
    }
});
//# sourceMappingURL=../../../app/mensajes.service.js.map