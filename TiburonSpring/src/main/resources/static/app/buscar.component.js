System.register(['angular2/core', 'angular2/router', './product.service', './product.list.component', './filtro.component', './user.service', './user.list.component', './follow.service'], function(exports_1, context_1) {
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
    var core_1, router_1, product_service_1, product_list_component_1, filtro_component_1, user_service_1, user_list_component_1, follow_service_1;
    var BuscarComponent;
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
            function (product_list_component_1_1) {
                product_list_component_1 = product_list_component_1_1;
            },
            function (filtro_component_1_1) {
                filtro_component_1 = filtro_component_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (user_list_component_1_1) {
                user_list_component_1 = user_list_component_1_1;
            },
            function (follow_service_1_1) {
                follow_service_1 = follow_service_1_1;
            }],
        execute: function() {
            BuscarComponent = (function () {
                function BuscarComponent(pService, router, routeParams, uService, fService) {
                    this.pService = pService;
                    this.router = router;
                    this.routeParams = routeParams;
                    this.uService = uService;
                    this.fService = fService;
                    this.products = [];
                    this.users = [];
                    this.prods = true;
                }
                BuscarComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.palabra = this.routeParams.get('palabra');
                    var p = this.palabra.split('+');
                    if (p[1] === 'product') {
                        this.prods = true;
                        this.pService.getProductListSearch(this.palabra).subscribe(function (l) { return _this.products = l; }, function (error) { return console.log(error); });
                    }
                    else if (p[1] === 'user') {
                        this.prods = false;
                        var ulist_1 = [];
                        this.uService.getUserListSearch(this.palabra).subscribe(function (l) { return ulist_1 = l; }, function (error) { return console.log(error); });
                        for (var _i = 0, ulist_2 = ulist_1; _i < ulist_2.length; _i++) {
                            var u = ulist_2[_i];
                            this.fService.getUserList(u).subscribe(function (ul) { return _this.users.push(ul); }, function (error) { return console.log(error); });
                        }
                    }
                };
                BuscarComponent = __decorate([
                    core_1.Component({
                        selector: 'main',
                        directives: [router_1.ROUTER_DIRECTIVES, product_list_component_1.ProductListComponent, filtro_component_1.FiltroComponent, user_list_component_1.UserListComponent],
                        templateUrl: 'app/buscar.component.html',
                    }), 
                    __metadata('design:paramtypes', [product_service_1.ProductService, router_1.Router, router_1.RouteParams, user_service_1.UserService, follow_service_1.FollowService])
                ], BuscarComponent);
                return BuscarComponent;
            }());
            exports_1("BuscarComponent", BuscarComponent);
        }
    }
});
//# sourceMappingURL=../../../app/buscar.component.js.map