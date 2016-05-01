System.register(['angular2/core', './utils', './user.service', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, utils_1, user_service_1;
    var Valoration, ValorationService;
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
            },
            function (_1) {}],
        execute: function() {
            Valoration = (function () {
                function Valoration(idUser, valoracion, description) {
                    this.idUser = idUser;
                    this.valoracion = valoracion;
                    this.description = description;
                }
                return Valoration;
            }());
            exports_1("Valoration", Valoration);
            ValorationService = (function () {
                function ValorationService(uService) {
                    this.uService = uService;
                    this.comments = [
                        new Valoration("Raul", "vendedor 100% fiable", "Muy puntual y amable."),
                        new Valoration("Raul", "No está mal", "Tiene buen aspecto, pero me parece un precio excesivo."),
                        new Valoration("David", "Buenisimo", "¡Me encanta este coche!"),
                        new Valoration("Juan", "Buen motor", "Nunca había visto este modelo, es increíble.")
                    ];
                }
                ValorationService.prototype.getComments = function () {
                    return utils_1.withObserver(this.comments);
                };
                ValorationService.prototype.addComment = function (comment) {
                    this.comments.push(comment);
                };
                ValorationService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], ValorationService);
                return ValorationService;
            }());
            exports_1("ValorationService", ValorationService);
        }
    }
});
//# sourceMappingURL=../../../app/valoracion.service.js.map