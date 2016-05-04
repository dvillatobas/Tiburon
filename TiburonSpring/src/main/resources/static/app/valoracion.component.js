System.register(['angular2/core', 'angular2/router', './valoracion.service', './product.service', './user.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, valoracion_service_1, product_service_1, user_service_1;
    var ValorationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (valoracion_service_1_1) {
                valoracion_service_1 = valoracion_service_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            ValorationComponent = (function () {
                function ValorationComponent(vService, router, routeParams, uService, pService) {
                    var _this = this;
                    this.vService = vService;
                    this.router = router;
                    this.routeParams = routeParams;
                    this.uService = uService;
                    this.pService = pService;
                    this.error = false;
                    this.remove = new core_1.EventEmitter();
                    var id = +this.routeParams.get('id');
                    if (this.pService.exist(id)) {
                        this.pService.getProductById(+this.routeParams.get('id')).subscribe(function (prod) {
                            _this.product = prod;
                        }, function (error) {
                            console.log(error);
                        });
                        this.uService.getUser(this.product.idUser).subscribe(function (usr) { return _this.user = usr; }, function (error) { return console.log(error); });
                    }
                    else {
                        this.error = true;
                    }
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', valoracion_service_1.Valoration)
                ], ValorationComponent.prototype, "comment", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ValorationComponent.prototype, "remove", void 0);
                ValorationComponent = __decorate([
                    core_1.Component({
                        selector: 'valoration',
                        templateUrl: 'app/valoracion.component.html'
                    }), 
                    __metadata('design:paramtypes', [valoracion_service_1.ValorationService, router_1.Router, router_1.RouteParams, user_service_1.UserService, product_service_1.ProductService])
                ], ValorationComponent);
                return ValorationComponent;
            })();
            exports_1("ValorationComponent", ValorationComponent);
        }
    }
});
//# sourceMappingURL=../../../app/valoracion.component.js.map