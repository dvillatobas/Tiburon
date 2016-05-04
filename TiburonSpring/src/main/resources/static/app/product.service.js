System.register(['angular2/core', './utils', './user.service'], function(exports_1) {
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
    var Product, ProductService;
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
            Product = (function () {
                function Product(id, publicDate, name, used, year, location, img, price, idUser, type, description) {
                    this.id = id;
                    this.publicDate = publicDate;
                    this.name = name;
                    this.used = used;
                    this.year = year;
                    this.location = location;
                    this.img = img;
                    this.price = price;
                    this.idUser = idUser;
                    this.type = type;
                    this.description = description;
                }
                return Product;
            })();
            exports_1("Product", Product);
            ProductService = (function () {
                function ProductService(uService) {
                    this.uService = uService;
                    this.products = [
                        new Product(1, Date.now(), 'dodge charger', 20000, 1969, 'Burgos', '/imagenes/1.jpg', 54000, 1, 'car', 'Utilizado en la pelicula "fast and furious", no ha tenido ningún golpe, tiene barras antivuelco, asientos deportivos, escape remux, frenos brembo competicion SX, amortiguadores blistein sport de dureza regulable, todo homologado para calle .'),
                        new Product(2, Date.now() + 2, 'chevrolet camaro', 155879, 2001, 'Badajoz', '/imagenes/coches/857376chevrolet_camaro_ss_1967.jpg', 65000, 2, 'car', 'De importación, recien matriculado en España, un solo propietario, kms certificados, correas recien cambiadas, neumaticos nuevos .'),
                        new Product(3, Date.now(), 'ford mustang', 15400, 1971, 'Madrid', '/imagenes/coches/IMG_20130319_170123_HDR.jpg', 35500, 3, 'car', 'Tapicería de cuero, llantas originales, sin dirección asistida, repintado hace un mes incluido transferencia en el precio, no negociable.'),
                        new Product(4, Date.now() + 5, 'turbocompresor-garret g-234', 254675, 2004, 'Murcia', '/imagenes/piezas/turbocompresor-garret.jpg', 600, 4, 'piece', 'Presión mínima 0.5 Bar, max 1.8 Bar,no tiene garantía, entrega en mano, precio no negociable.'),
                        new Product(5, Date.now(), 'faros delanteros R laguna', 0, 2003, 'Ávila', '/imagenes/piezas/fk_daylight_scheinwerfer_renault_laguna_fkfsrn010023.jpg', 240, 1, 'piece', 'descripcion: Antinieblas no incorporado, bombillas H7, luces de posición led, homologado para uso de calle, sin problemas para ITV, motores de regulación en altura no incluidos.'),
                    ];
                    this.lastId = 5;
                    this.newestProducts = this.getNewestList();
                }
                ProductService.prototype.setId = function () {
                    this.lastId++;
                    return this.lastId;
                };
                ProductService.prototype.getNewestList = function () {
                    var list = this.products.sort(function (n1, n2) {
                        if (n1.publicDate > n2.publicDate) {
                            return 1;
                        }
                        if (n1.publicDate < n2.publicDate) {
                            return -1;
                        }
                        return 0;
                    });
                    return utils_1.withObserver(list);
                };
                ProductService.prototype.getProductList = function () {
                    return utils_1.withObserver(this.products);
                };
                ProductService.prototype.exist = function (id) {
                    if (id <= this.lastId) {
                        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
                            var p = _a[_i];
                            if (p.id === id) {
                                return true;
                            }
                        }
                    }
                    return false;
                };
                ProductService.prototype.getProductById = function (id) {
                    var product = this.products.filter(function (c) { return c.id === +id; })[0];
                    return utils_1.withObserver(new Product(product.id, product.publicDate, product.name, product.used, product.year, product.location, product.img, product.price, product.idUser, product.type, product.description));
                };
                ProductService.prototype.getProductListUser = function (id) {
                    var list = [];
                    for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
                        var p = _a[_i];
                        if (p.idUser === id) {
                            list.push(p);
                        }
                    }
                    return utils_1.withObserver(list);
                };
                ProductService.prototype.getProductListSearch = function (palabra) {
                    var busq = palabra.split('+');
                    var listFiltrada = [];
                    for (var i = 0; i < this.products.length; i++) {
                        if ((this.products[i].name.indexOf(busq[0])) > -1) {
                            listFiltrada.push(this.products[i]);
                        }
                    }
                    if (listFiltrada.length === 0) {
                        return utils_1.withObserver([]);
                    }
                    if (busq[2] != '') {
                        var aux = [];
                        for (var _i = 0; _i < listFiltrada.length; _i++) {
                            var p = listFiltrada[_i];
                            if (p.price >= +busq[2]) {
                                aux.push(p);
                            }
                        }
                        listFiltrada = [];
                        listFiltrada = aux;
                    }
                    if (busq[3] != '') {
                        var aux = [];
                        for (var _a = 0; _a < listFiltrada.length; _a++) {
                            var p = listFiltrada[_a];
                            if (p.price <= +busq[3]) {
                                aux.push(p);
                            }
                        }
                        listFiltrada = [];
                        listFiltrada = aux;
                    }
                    if (busq[4] != 'ambos') {
                        var aux = [];
                        for (var _b = 0; _b < listFiltrada.length; _b++) {
                            var p = listFiltrada[_b];
                            if (p.type == busq[4]) {
                                aux.push(p);
                            }
                        }
                        listFiltrada = [];
                        listFiltrada = aux;
                    }
                    if (busq[5] != '') {
                        var aux = [];
                        for (var _c = 0; _c < listFiltrada.length; _c++) {
                            var p = listFiltrada[_c];
                            if (p.location == busq[5]) {
                                aux.push(p);
                            }
                        }
                        listFiltrada = [];
                        listFiltrada = aux;
                    }
                    if (busq[6] === 'true' && busq[7] === 'false') {
                        var aux = [];
                        var u;
                        for (var _d = 0; _d < listFiltrada.length; _d++) {
                            var p = listFiltrada[_d];
                            this.uService.getUser(p.idUser).subscribe(function (us) { return u = us; }, function (error) { return console.log(error); });
                            if (u.tipo == 'particular') {
                                aux.push(p);
                            }
                        }
                        listFiltrada = [];
                        listFiltrada = aux;
                    }
                    if (busq[7] === 'true' && busq[6] === 'false') {
                        var aux = [];
                        var u;
                        for (var _e = 0; _e < listFiltrada.length; _e++) {
                            var p = listFiltrada[_e];
                            this.uService.getUser(p.idUser).subscribe(function (us) { return u = us; }, function (error) { return console.log(error); });
                            if (u.tipo == 'profesional') {
                                aux.push(p);
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
                ProductService.prototype.saveProduct = function (product) {
                    if (product.id) {
                        var oldProduct = this.products.filter(function (c) { return c.id === product.id; })[0];
                        oldProduct.name = product.name;
                        oldProduct.used = product.used;
                        oldProduct.location = product.location;
                        oldProduct.price = product.price;
                        oldProduct.year = product.year;
                        oldProduct.description = product.description;
                        oldProduct.img = product.img;
                    }
                    else {
                        product.id = this.setId();
                        if ((product.used == 0)) {
                            product.used = 'Nuevo';
                        }
                        product.idUser = this.uService.getIdUserLogued();
                        product.img = '/imagenes/1.jpg';
                        this.products.push(product);
                    }
                    return utils_1.withObserver(product);
                };
                ProductService.prototype.deleteProduct = function (idProduct) {
                    for (var i = 0; i < this.products.length; i++) {
                        if (this.products[i].id === idProduct) {
                            this.products.splice(i, 1);
                            break;
                        }
                    }
                    return utils_1.withObserver(undefined);
                };
                ProductService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], ProductService);
                return ProductService;
            })();
            exports_1("ProductService", ProductService);
        }
    }
});
//# sourceMappingURL=../../../app/product.service.js.map