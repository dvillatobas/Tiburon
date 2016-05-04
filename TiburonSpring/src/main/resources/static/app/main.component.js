System.register(['angular2/core', 'angular2/router', './user.service', './follow.service', './product.service', './product.list.img.component', './filtro.component', './user.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, user_service_1, follow_service_1, product_service_1, product_list_img_component_1, filtro_component_1, user_component_1;
    var MainComponent;
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
            function (follow_service_1_1) {
                follow_service_1 = follow_service_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            },
            function (product_list_img_component_1_1) {
                product_list_img_component_1 = product_list_img_component_1_1;
            },
            function (filtro_component_1_1) {
                filtro_component_1 = filtro_component_1_1;
            },
            function (user_component_1_1) {
                user_component_1 = user_component_1_1;
            }],
        execute: function() {
            MainComponent = (function () {
                function MainComponent(router, uService, fService, pService) {
                    var _this = this;
                    this.router = router;
                    this.uService = uService;
                    this.fService = fService;
                    this.pService = pService;
                    this.newProducts = [];
                    this.followProducts = [];
                    var id = this.uService.getIdUserLogued();
                    if (id != 0) {
                        this.uService.getUser(id).subscribe(function (u) { return _this.user = u; }, function (error) { return console.log(error); });
                        var list = [];
                        this.fService.getListFollow(id).subscribe(function (l) { return _this.follow = l.length; }, function (error) { return console.log(error); });
                        this.fService.getListFollowers(id).subscribe(function (l) { return _this.following = l.length; }, function (error) { return console.log(error); });
                        var userlist = [];
                        this.fService.getListFollow(id).subscribe(function (list) { return userlist = list; }, function (error) { return console.log(error); });
                        var plist = [];
                        for (var _i = 0; _i < userlist.length; _i++) {
                            var u = userlist[_i];
                            this.pService.getProductListUser(u).subscribe(function (list) { return plist = list; }, function (error) { return console.log(error); });
                            this.followProducts = this.followProducts.concat((plist));
                        }
                    }
                    else {
                        this.pService.getNewestList().subscribe(function (list) { return _this.newProducts = list; }, function (error) { return console.log; });
                    }
                }
                MainComponent = __decorate([
                    core_1.Component({
                        selector: 'main',
                        directives: [router_1.ROUTER_DIRECTIVES, product_list_img_component_1.ProductListImg, filtro_component_1.FiltroComponent, user_component_1.UserComponent],
                        templateUrl: 'app/main.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService, follow_service_1.FollowService, product_service_1.ProductService])
                ], MainComponent);
                return MainComponent;
            })();
            exports_1("MainComponent", MainComponent);
        }
    }
});
//# sourceMappingURL=../../../app/main.component.js.map