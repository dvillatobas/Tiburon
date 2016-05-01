System.register(['angular2/core', 'angular2/router', './product.service', './user.service', './mensajes.service'], function(exports_1, context_1) {
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
    var core_1, router_1, product_service_1, user_service_1, mensajes_service_1;
    var ProductListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (mensajes_service_1_1) {
                mensajes_service_1 = mensajes_service_1_1;
            }],
        execute: function() {
            ProductListComponent = (function () {
                function ProductListComponent(pService, uService, router, routeParams, mService) {
                    this.pService = pService;
                    this.uService = uService;
                    this.router = router;
                    this.routeParams = routeParams;
                    this.mService = mService;
                    this.products = [];
                    this.word = '';
                    this.word = routeParams.get('palabra');
                }
                ProductListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (this.router.hostComponent.name === 'BuscarComponent') {
                        if (this.word != null) {
                        }
                        else {
                            this.pService.getProductList().subscribe(function (list) { return _this.products = list; }, function (error) { return console.log(error); });
                        }
                        this.edit = false;
                        this.contact = true;
                    }
                    else if (this.router.hostComponent.name === 'MisProductosComponent') {
                        this.pService.getProductListUser(this.uService.getIdUserLogued()).subscribe(function (list) { return _this.products = list; }, function (error) { return console.log(error); });
                        this.edit = true;
                        this.contact = false;
                    }
                };
                ProductListComponent.prototype.mensaje = function () {
                    if (this.uService.getIdUserLogued()) {
                        this.router.navigate(['Mensajes']);
                    }
                    else {
                        this.router.navigate(['Login']);
                    }
                };
                ProductListComponent.prototype.editar = function (idProduct) {
                    this.router.navigate(['EditarProducto', { id: idProduct }]);
                };
                ProductListComponent.prototype.borrar = function (idProduct) {
                    var _this = this;
                    var confirm = window.confirm("¿Estas seguro de que deseas borrar este producto?");
                    if (confirm) {
                        this.pService.deleteProduct(idProduct).subscribe(function (_) { return _this.ngOnInit(); }, function (error) { return console.log(error); });
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ProductListComponent.prototype, "products", void 0);
                ProductListComponent = __decorate([
                    core_1.Component({
                        selector: 'product-list',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        templateUrl: 'app/product.list.component.html'
                    }), 
                    __metadata('design:paramtypes', [product_service_1.ProductService, user_service_1.UserService, router_1.Router, router_1.RouteParams, mensajes_service_1.MensajesService])
                ], ProductListComponent);
                return ProductListComponent;
            }());
            exports_1("ProductListComponent", ProductListComponent);
        }
    }
});
//# sourceMappingURL=../../../app/product.list.component.js.map