System.register(['angular2/core', 'angular2/router', './user.service', './follow.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, user_service_1, follow_service_1;
    var UserListComponent;
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
            }],
        execute: function() {
            UserListComponent = (function () {
                function UserListComponent(uService, router, routeParams, fService) {
                    this.uService = uService;
                    this.router = router;
                    this.routeParams = routeParams;
                    this.fService = fService;
                    this.refresh = new core_1.EventEmitter();
                    this.vacio = false;
                }
                UserListComponent.prototype.ngOnInit = function () {
                    if (this.userList === undefined) {
                        this.vacio = true;
                    }
                };
                UserListComponent.prototype.refreshList = function (b) {
                    this.refresh.next(true);
                };
                UserListComponent.prototype.seguir = function (id) {
                    if (this.uService.getIdUserLogued() != 0) {
                        this.fService.addFollow(this.uService.getIdUserLogued(), id);
                        this.refreshList(true);
                    }
                    else {
                        this.router.navigate(['Login']);
                    }
                };
                UserListComponent.prototype.noSeguir = function (id) {
                    this.fService.deleteFollow(this.uService.getIdUserLogued(), id);
                    this.refreshList(true);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], UserListComponent.prototype, "userList", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], UserListComponent.prototype, "type", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], UserListComponent.prototype, "refresh", void 0);
                UserListComponent = __decorate([
                    core_1.Component({
                        selector: 'user-list',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        templateUrl: 'app/user.list.component.html'
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router, router_1.RouteParams, follow_service_1.FollowService])
                ], UserListComponent);
                return UserListComponent;
            })();
            exports_1("UserListComponent", UserListComponent);
        }
    }
});
//# sourceMappingURL=../../../app/user.list.component.js.map