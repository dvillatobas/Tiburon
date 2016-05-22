System.register(['angular2/core', './utils', './user.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, utils_1, user_service_1;
    var Follow, UserList, FollowService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (utils_1_1) {
                utils_1 = utils_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            Follow = (function () {
                function Follow(id, idSeguidor, idSeguido) {
                    this.id = id;
                    this.idSeguidor = idSeguidor;
                    this.idSeguido = idSeguido;
                }
                return Follow;
            })();
            exports_1("Follow", Follow);
            UserList = (function () {
                function UserList(id, following, nick, follow, followers, img) {
                    this.id = id;
                    this.following = following;
                    this.nick = nick;
                    this.follow = follow;
                    this.followers = followers;
                    this.img = img;
                }
                return UserList;
            })();
            exports_1("UserList", UserList);
            FollowService = (function () {
                function FollowService(uService) {
                    this.uService = uService;
                    this.follows = [
                        new Follow(1, 2, 1),
                        new Follow(2, 3, 1),
                        new Follow(3, 1, 2)
                    ];
                    this.lastId = 3;
                }
                FollowService.prototype.setId = function () {
                    this.lastId++;
                    return this.lastId;
                };
                FollowService.prototype.getListFollow = function (id) {
                    var list = [];
                    for (var _i = 0, _a = this.follows; _i < _a.length; _i++) {
                        var f = _a[_i];
                        if (f.idSeguidor === id) {
                            list.push(f.idSeguido);
                        }
                    }
                    return utils_1.withObserver(list);
                };
                FollowService.prototype.getUserListFollows = function (id) {
                    var list = [];
                    var u;
                    var follow = [];
                    var ul;
                    this.getListFollow(id).subscribe(function (l) { return follow = l; }, function (error) { return console.log(error); });
                    for (var _i = 0; _i < follow.length; _i++) {
                        var f = follow[_i];
                        this.uService.getUser(f).subscribe(function (user) { return u = user; }, function (error) { return console.log(error); });
                        this.getUserList(u).subscribe(function (l) { return ul = l; }, function (error) { return console.log(error); });
                        list.push(ul);
                    }
                    return utils_1.withObserver(list);
                };
                FollowService.prototype.getListFollowers = function (id) {
                    var list = [];
                    for (var _i = 0, _a = this.follows; _i < _a.length; _i++) {
                        var f = _a[_i];
                        if (f.idSeguido === id) {
                            list.push(f.idSeguidor);
                        }
                    }
                    return utils_1.withObserver(list);
                };
                FollowService.prototype.getUserListFollowers = function (id) {
                    var list = [];
                    var u;
                    var follow = [];
                    var ul;
                    this.getListFollowers(id).subscribe(function (l) { return follow = l; }, function (error) { return console.log(error); });
                    for (var _i = 0; _i < follow.length; _i++) {
                        var f = follow[_i];
                        this.uService.getUser(f).subscribe(function (user) { return u = user; }, function (error) { return console.log(error); });
                        this.getUserList(u).subscribe(function (l) { return ul = l; }, function (error) { return console.log(error); });
                        list.push(ul);
                    }
                    return utils_1.withObserver(list);
                };
                FollowService.prototype.getUserList = function (u) {
                    var follows;
                    var followers;
                    this.getListFollow(u.id).subscribe(function (l) { return follows = l.length; }, function (error) { return console.log(error); });
                    this.getListFollowers(u.id).subscribe(function (l) { return followers = l.length; }, function (error) { return console.log(error); });
                    var ul = new UserList(u.id, this.isFollowing(this.uService.getIdUserLogued(), u.id), u.nick, follows, followers, u.img);
                    return utils_1.withObserver(ul);
                };
                FollowService.prototype.isFollowing = function (id1, id2) {
                    for (var _i = 0, _a = this.follows; _i < _a.length; _i++) {
                        var f = _a[_i];
                        if (id1 === f.idSeguidor && id2 === f.idSeguido) {
                            return true;
                        }
                    }
                    return false;
                };
                FollowService.prototype.addFollow = function (id1, id2) {
                    if (id1 != id2) {
                        this.follows.push(new Follow(this.setId(), id1, id2));
                    }
                };
                FollowService.prototype.deleteFollow = function (id1, id2) {
                    for (var _i = 0, _a = this.follows; _i < _a.length; _i++) {
                        var f = _a[_i];
                        if (f.idSeguidor === id1 && f.idSeguido === id2) {
                            this.follows.splice(this.follows.indexOf(f), 1);
                        }
                    }
                };
                FollowService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], FollowService);
                return FollowService;
            })();
            exports_1("FollowService", FollowService);
        }
    }
});
//# sourceMappingURL=../../../app/follow.service.js.map