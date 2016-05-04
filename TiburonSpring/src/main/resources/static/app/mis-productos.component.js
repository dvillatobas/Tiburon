System.register(['angular2/core', 'angular2/router', './product.list.component', './user.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, product_list_component_1, user_service_1;
    var MisProductosComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (product_list_component_1_1) {
                product_list_component_1 = product_list_component_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            MisProductosComponent = (function () {
                function MisProductosComponent(uService, router) {
                    this.uService = uService;
                    this.router = router;
                    if (this.uService.getIdUserLogued() === 0) {
                        this.router.navigate(['Login']);
                    }
                }
                MisProductosComponent.prototype.nuevoProducto = function () {
                    this.router.navigate(['NuevoProducto']);
                };
                MisProductosComponent = __decorate([
                    core_1.Component({
                        selector: 'main',
                        templateUrl: 'app/mis-productos.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES, product_list_component_1.ProductListComponent]
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router])
                ], MisProductosComponent);
                return MisProductosComponent;
            })();
            exports_1("MisProductosComponent", MisProductosComponent);
        }
    }
});
//# sourceMappingURL=../../../app/mis-productos.component.js.map