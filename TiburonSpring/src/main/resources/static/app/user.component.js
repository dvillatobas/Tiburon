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
    var UserComponent;
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
            UserComponent = (function () {
                function UserComponent(fService, uService, router) {
                    this.fService = fService;
                    this.uService = uService;
                    this.router = router;
                }
                UserComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.main = (this.uso === 'main');
                    this.showFollow = !(this.uService.getIdUserLogued() === this.user.id);
                    this.fService.getListFollow(this.user.id).subscribe(function (l) { return _this.nFollows = l.length; }, function (error) { return console.log(error); });
                    this.refreshFollow();
                };
                UserComponent.prototype.refreshFollow = function () {
                    var _this = this;
                    this.follow = this.fService.isFollowing(this.uService.getIdUserLogued(), this.user.id);
                    this.fService.getListFollowers(this.user.id).subscribe(function (l) { return _this.nFollowers = l.length; }, function (error) { return console.log(error); });
                };
                UserComponent.prototype.noSeguir = function (id) {
                    this.fService.deleteFollow(this.uService.getIdUserLogued(), id);
                    this.refreshFollow();
                };
                UserComponent.prototype.seguir = function (id) {
                    if (this.uService.getIdUserLogued() != 0) {
                        this.fService.addFollow(this.uService.getIdUserLogued(), id);
                        this.refreshFollow();
                    }
                    else {
                        this.router.navigate(['Login']);
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], UserComponent.prototype, "user", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], UserComponent.prototype, "uso", void 0);
                UserComponent = __decorate([
                    core_1.Component({
                        selector: 'user',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        templateUrl: 'app/user.component.html'
                    }), 
                    __metadata('design:paramtypes', [follow_service_1.FollowService, user_service_1.UserService, router_1.Router])
                ], UserComponent);
                return UserComponent;
            })();
            exports_1("UserComponent", UserComponent);
        }
    }
});
//# sourceMappingURL=../../../app/user.component.js.map