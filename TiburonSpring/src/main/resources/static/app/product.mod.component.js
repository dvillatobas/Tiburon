System.register(['angular2/core', 'angular2/router', './product.service'], function(exports_1, context_1) {
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
    var core_1, router_1, product_service_1;
    var ProductModComponent;
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
            }],
        execute: function() {
            ProductModComponent = (function () {
                function ProductModComponent(router, routeParams, pservice) {
                    var _this = this;
                    this.router = router;
                    this.pservice = pservice;
                    this.nuevo = true;
                    var id = routeParams.get('id');
                    if (id) {
                        pservice.getProductById(id).subscribe(function (product) { return _this.product = product; }, function (error) { return console.log(error); });
                        this.nuevo = false;
                    }
                    else {
                        this.product = new product_service_1.Product(undefined, undefined, '', undefined, undefined, '', '', undefined, undefined, '', '');
                        this.nuevo = true;
                    }
                }
                ProductModComponent.prototype.cancelar = function () {
                    //this.router.navigate(['MisProductos']);
                    window.history.back();
                };
                ProductModComponent.prototype.comprobarGuardar = function () {
                    //this.resetEmpty();
                    console.log(this.product.type);
                    if (this.product.type == '') {
                        this.emptyType = true;
                        return 0;
                    }
                    if (this.product.name === '') {
                        this.emptyName = true;
                        return 0;
                    }
                    if (this.product.used === undefined) {
                        this.emptyUsed = true;
                        return 0;
                    }
                    if (this.product.location === '') {
                        this.emptyLocation = true;
                        return 0;
                    }
                    if (this.product.price === undefined) {
                        this.emptyPrice = true;
                        return 0;
                    }
                    if (this.product.year === undefined) {
                        this.product.year = "Sin indicar";
                    }
                    if (this.product.description.length <= 10) {
                        this.emptyDescription = true;
                        return 0;
                    }
                    if (!this.isNumeric(this.product.used)) {
                        this.numericUsed = true;
                        return 0;
                    }
                    if (!this.isNumeric(this.product.price)) {
                        this.numericPrice = true;
                        return 0;
                    }
                    if (this.product.year != undefined) {
                        if (!this.isNumeric(this.product.year)) {
                            this.numericYear = true;
                            return 0;
                        }
                    }
                    this.pservice.saveProduct(this.product);
                    //this.router.navigate(['Inicio']);
                    window.history.back();
                };
                ProductModComponent.prototype.isNumeric = function (num) {
                    return !isNaN(parseFloat(num)) && isFinite(num);
                };
                ProductModComponent = __decorate([
                    core_1.Component({
                        selector: 'main',
                        directives: [router_1.ROUTER_DIRECTIVES, ProductModComponent],
                        templateUrl: 'app/product.mod.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, product_service_1.ProductService])
                ], ProductModComponent);
                return ProductModComponent;
            }());
            exports_1("ProductModComponent", ProductModComponent);
        }
    }
});
//# sourceMappingURL=../../../app/product.mod.component.js.map