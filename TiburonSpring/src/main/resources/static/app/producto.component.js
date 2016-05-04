System.register(['angular2/core', 'angular2/router', './user.service', './product.service', './valoracion.component', './valoracion.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, user_service_1, product_service_1, valoracion_component_1, valoracion_service_1;
    var ProductoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            },
            function (valoracion_component_1_1) {
                valoracion_component_1 = valoracion_component_1_1;
            },
            function (valoracion_service_1_1) {
                valoracion_service_1 = valoracion_service_1_1;
            }],
        execute: function() {
            ProductoComponent = (function () {
                function ProductoComponent(vService, router, routeParams, uService, pService) {
                    var _this = this;
                    this.vService = vService;
                    this.router = router;
                    this.routeParams = routeParams;
                    this.uService = uService;
                    this.pService = pService;
                    this.comments = [];
                    this.error = false;
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
                ProductoComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.vService.getComments().subscribe(function (comments) { return _this.comments = comments; }, function (error) { return console.log(error); });
                };
                ProductoComponent.prototype.volver = function () {
                    window.history.back();
                };
                ProductoComponent.prototype.mensaje = function () {
                    if (this.uService.getIdUserLogued() != this.user.id) {
                        this.router.navigate(['Mensajes', { id: this.user.id }]);
                    }
                };
                ProductoComponent.prototype.addValoration = function (valoracion, description) {
                    if (this.uService.getLogueado()) {
                        //  this.router.navigate(['Login']);
                        if ((valoracion == '') || (description == '')) {
                            window.confirm("Debes rellenar todos los campos");
                        }
                        else {
                            var comment = new valoracion_service_1.Valoration(this.uService.getNick(this.uService.getIdUserLogued()), valoracion, description, this.product.id);
                            this.vService.addComment(comment);
                            this.ngOnInit();
                        }
                    }
                    else {
                        this.router.navigate(['Login']);
                    }
                    //this.comments.push(new Valoration(1,valoracion,description));
                };
                ProductoComponent = __decorate([
                    core_1.Component({
                        selector: 'main',
                        directives: [router_1.ROUTER_DIRECTIVES, valoracion_component_1.ValorationComponent],
                        templateUrl: 'app/producto.component.html'
                    }), 
                    __metadata('design:paramtypes', [valoracion_service_1.ValorationService, router_1.Router, router_1.RouteParams, user_service_1.UserService, product_service_1.ProductService])
                ], ProductoComponent);
                return ProductoComponent;
            })();
            exports_1("ProductoComponent", ProductoComponent);
        }
    }
});
//# sourceMappingURL=../../../app/producto.component.js.map