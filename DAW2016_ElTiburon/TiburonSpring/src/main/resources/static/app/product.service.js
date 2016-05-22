System.register(['angular2/core', 'rxjs/Observable', 'angular2/http', './utils', './user.service', 'rxjs/Rx'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Observable_1, http_1, utils_1, user_service_1;
    var URL, ProductService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (utils_1_1) {
                utils_1 = utils_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (_1) {}],
        execute: function() {
            URL = 'products/';
            ProductService = (function () {
                function ProductService(uService, http) {
                    this.uService = uService;
                    this.http = http;
                    //private lastId: number = 5;
                    this.newestProducts = this.getNewestList();
                }
                /*setId() {
                  this.lastId++;
                  return this.lastId;
                }
              */
                ProductService.prototype.getProductList = function () {
                    return this.http.get(URL)
                        .map(function (response) { return response.json(); });
                    //.catch(error => this.handleError(error));
                };
                ProductService.prototype.getProductById = function (id) {
                    var _this = this;
                    return this.http.get(URL + id)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return _this.handleError(error); });
                };
                ProductService.prototype.saveProduct = function (product) {
                    var body = JSON.stringify(product);
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json',
                        'X-Request-With': 'XMLHttpRequest'
                    });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(URL, body, options)
                        .map(function (response) { return response.json(); });
                    //.catch(error => this.handleError(error));
                };
                ProductService.prototype.deleteProduct = function (idProduct) {
                    var headers = new http_1.Headers({
                        'X-Requested-With': 'XMLHttpRequest'
                    });
                    var options = new http_1.RequestOptions({ headers: headers });
                    this.http.delete(URL + idProduct, options)
                        .map(function (response) { return undefined; });
                    //.catch(error => this.handleError(error));
                };
                ProductService.prototype.getNewestList = function () {
                    this.getProductList();
                    /*let list = this.products.sort(
                      (n1, n2) => {
                        if (n1.publicDate > n2.publicDate) { return 1; }
                        if (n1.publicDate < n2.publicDate) { return -1; }
                        return 0;
                      }
                    );
                    return withObserver(list);*/
                };
                /*  exist(id){
                    if(id<=this.lastId){
                      for(let p of this.products){
                        if(p.id === id){
                          return true;
                        }
                      }
                    }
                    return false;
                
                  }
                */
                ProductService.prototype.getProductListUser = function (id) {
                    var list = [];
                    var productos = this.getProductList().subscribe(function (prod) { return productos = prod; }, function (error) { return console.log(error); });
                    for (var _i = 0; _i < productos.length; _i++) {
                        var p = productos[_i];
                        if (p.idUser === id) {
                            list.push(p);
                        }
                    }
                    return utils_1.withObserver(list);
                };
                ProductService.prototype.getProductListSearch = function (palabra) {
                    var busq = palabra.split('+');
                    var productos = this.getProductList().subscribe(function (prod) { return productos = prod; }, function (error) { return console.log(error); });
                    var listFiltrada = [];
                    for (var i = 0; i < productos.length; i++) {
                        if ((productos[i].name.indexOf(busq[0])) > -1) {
                            listFiltrada.push(productos[i]);
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
                ProductService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw("Server error (" + error.status + "): " + error.text());
                };
                ProductService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [user_service_1.UserService, http_1.Http])
                ], ProductService);
                return ProductService;
            })();
            exports_1("ProductService", ProductService);
        }
    }
});
//# sourceMappingURL=../../../app/product.service.js.map