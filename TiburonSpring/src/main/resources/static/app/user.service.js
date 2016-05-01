System.register(['angular2/core', './utils'], function(exports_1, context_1) {
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
    var core_1, utils_1;
    var User, UserList, UserService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (utils_1_1) {
                utils_1 = utils_1_1;
            }],
        execute: function() {
            User = (function () {
                function User(id, nick, nombre, apellidos, telefono, email, pass, img, tipo, rol) {
                    this.id = id;
                    this.nick = nick;
                    this.nombre = nombre;
                    this.apellidos = apellidos;
                    this.telefono = telefono;
                    this.email = email;
                    this.pass = pass;
                    this.img = img;
                    this.tipo = tipo;
                    this.rol = rol;
                }
                return User;
            }());
            exports_1("User", User);
            UserList = (function () {
                function UserList(id, following, nick, follow, followers, img) {
                    this.id = id;
                    this.following = following;
                    this.nick = nick;
                    this.follow = follow;
                    this.followers = followers;
                    this.img = img;
                }
                return UserList;
            }());
            exports_1("UserList", UserList);
            UserService = (function () {
                function UserService() {
                    this.users = [
                        new User(1, 'david', 'david', 'villatobas', 666888999, 'dvd1880@gmail.com', '1234', '/imagenes/users/foto2.jpg', 'profesional', 'admin'),
                        new User(2, 'juan', 'juan', 'villatobas', 653546977, 'dvd1880@gmail.com', '1234', '/imagenes/users/foto1.jpg', 'particular', 'normal'),
                        new User(3, 'luis', 'luis', 'villatobas', 653546977, 'dvd1880@gmail.com', '1234', '/imagenes/users/foto1.jpg', 'profesional', 'normal'),
                        new User(4, 'raul', 'raul', 'villatobas', 653546977, 'dvd1880@gmail.com', '1234', '/imagenes/users/foto2.jpg', 'particular', 'normal')
                    ];
                    this.logueado = false;
                    this.idUserLogued = 0;
                    this.lastId = 4;
                }
                UserService.prototype.getIdUserLogued = function () {
                    return this.idUserLogued;
                };
                UserService.prototype.getLogueado = function () {
                    return this.logueado;
                };
                UserService.prototype.setId = function () {
                    this.lastId++;
                    return this.lastId;
                };
                UserService.prototype.getLastId = function () {
                    return this.lastId;
                };
                UserService.prototype.getUserList = function () {
                    return utils_1.withObserver(this.users);
                };
                UserService.prototype.getUserByNick = function (nick) {
                    var user = this.users.filter(function (u) { return u.nick === nick; })[0];
                    return utils_1.withObserver(user);
                };
                UserService.prototype.login = function (id) {
                    this.logueado = true;
                    this.idUserLogued = id;
                };
                UserService.prototype.getUser = function (id) {
                    for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
                        var u = _a[_i];
                        if (u.id === id) {
                            return utils_1.withObserver(u);
                        }
                    }
                };
                UserService.prototype.getNick = function (id) {
                    for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
                        var u = _a[_i];
                        if (u.id === id) {
                            return u.nick;
                        }
                    }
                };
                UserService.prototype.logout = function () {
                    this.logueado = false;
                    this.idUserLogued = 0;
                };
                UserService.prototype.nickExist = function (nick) {
                    for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
                        var u = _a[_i];
                        if (u.nick === nick) {
                            return true;
                        }
                    }
                    return false;
                };
                UserService.prototype.emailExist = function (mail) {
                    for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
                        var u = _a[_i];
                        if (u.email === mail) {
                            return true;
                        }
                    }
                    return false;
                };
                UserService.prototype.newUser = function (u) {
                    if (this.nickExist(u.nick)) {
                        return 1;
                    }
                    else if (this.emailExist(u.email)) {
                        return 2;
                    }
                    else {
                        this.users.push(u);
                        return 0;
                    }
                };
                UserService.prototype.getUserListSearch = function (palabra) {
                    var busq = palabra.split('+');
                    var listFiltrada = [];
                    for (var i = 0; i < this.users.length; i++) {
                        if ((this.users[i].nick.indexOf(busq[0])) > -1) {
                            listFiltrada.push(this.users[i]);
                        }
                    }
                    if (listFiltrada.length === 0) {
                        return utils_1.withObserver([]);
                    }
                    if (busq[6] === 'true' && busq[7] === 'false') {
                        var aux = [];
                        var u = void 0;
                        for (var _i = 0, listFiltrada_1 = listFiltrada; _i < listFiltrada_1.length; _i++) {
                            var u_1 = listFiltrada_1[_i];
                            if (u_1.tipo == 'particular') {
                                aux.push(u_1);
                            }
                        }
                        listFiltrada = [];
                        listFiltrada = aux;
                    }
                    if (busq[7] === 'true' && busq[6] === 'false') {
                        var aux = [];
                        var u = void 0;
                        for (var _a = 0, listFiltrada_2 = listFiltrada; _a < listFiltrada_2.length; _a++) {
                            var u_2 = listFiltrada_2[_a];
                            if (u_2.tipo == 'profesional') {
                                aux.push(u_2);
                            }
                        }
                        listFiltrada = [];
                        listFiltrada = aux;
                    }
                    if (busq[7] === 'false' && busq[6] === 'false') {
                        return utils_1.withObserver([]);
                    }
                    return utils_1.withObserver(listFiltrada);
                };
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], UserService);
                return UserService;
            }());
            exports_1("UserService", UserService);
        }
    }
});
//# sourceMappingURL=../../../app/user.service.js.map