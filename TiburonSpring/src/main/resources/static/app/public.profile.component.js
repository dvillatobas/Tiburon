System.register(['angular2/core', 'angular2/router', './user.service', './product.service', './product.list.img.component', './follow.service', './user.component', './user.list.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, user_service_1, product_service_1, product_list_img_component_1, follow_service_1, user_component_1, user_list_component_1;
    var PublicProfileComponent;
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
            function (product_list_img_component_1_1) {
                product_list_img_component_1 = product_list_img_component_1_1;
            },
            function (follow_service_1_1) {
                follow_service_1 = follow_service_1_1;
            },
            function (user_component_1_1) {
                user_component_1 = user_component_1_1;
            },
            function (user_list_component_1_1) {
                user_list_component_1 = user_list_component_1_1;
            }],
        execute: function() {
            PublicProfileComponent = (function () {
                function PublicProfileComponent(uService, routeParams, fService, pService) {
                    this.uService = uService;
                    this.routeParams = routeParams;
                    this.fService = fService;
                    this.pService = pService;
                    this.showFollowers = false;
                    this.productsUser = [];
                    this.userList = [];
                }
                PublicProfileComponent.prototype.ngOnInit = function () {
                    this.refreshList(true);
                };
                PublicProfileComponent.prototype.refreshList = function (r) {
                    var _this = this;
                    var tipo = this.routeParams.get('type');
                    var id = this.routeParams.get('id');
                    this.uService.getUser(+this.routeParams.get('id')).subscribe(function (u) { return _this.user = u; }, function (error) { return console.log(error); });
                    if (tipo === 'profile') {
                        this.pService.getProductListUser(this.user.id).subscribe(function (l) { return _this.productsUser = l; }, function (error) { return console.log(error); });
                        this.titulo = 'Anuncios de ' + this.user.nick;
                    }
                    else if (tipo === 'following') {
                        this.fService.getUserListFollows(this.user.id).subscribe(function (l) { return _this.userList = l; }, function (error) { return console.log(error); });
                        this.showFollowers = true;
                    }
                    else if (tipo === 'followers') {
                        this.fService.getUserListFollowers(this.user.id).subscribe(function (l) { return _this.userList = l; }, function (error) { return console.log(error); });
                        this.showFollowers = true;
                    }
                };
                PublicProfileComponent = __decorate([
                    core_1.Component({
                        selector: 'main',
                        directives: [router_1.ROUTER_DIRECTIVES, product_list_img_component_1.ProductListImg, user_component_1.UserComponent, user_list_component_1.UserListComponent],
                        templateUrl: 'app/public.profile.component.html'
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService, router_1.RouteParams, follow_service_1.FollowService, product_service_1.ProductService])
                ], PublicProfileComponent);
                return PublicProfileComponent;
            })();
            exports_1("PublicProfileComponent", PublicProfileComponent);
        }
    }
});
//# sourceMappingURL=../../../app/public.profile.component.js.map