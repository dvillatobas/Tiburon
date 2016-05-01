System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var FiltroComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            FiltroComponent = (function () {
                function FiltroComponent(router, rParams) {
                    this.router = router;
                    this.rParams = rParams;
                    if (this.rParams.get('palabra') === null) {
                        this.busqueda = '';
                        this.userProd = 'product';
                        this.desde = '';
                        this.hasta = '';
                        this.tipo = 'ambos';
                        this.ubicacion = '';
                        this.vendedorP = true;
                        this.vendedorE = true;
                    }
                    else {
                        this.palabra = this.rParams.get('palabra');
                        var busq = this.palabra.split('+');
                        this.busqueda = busq[0];
                        this.userProd = busq[1];
                        this.desde = busq[2];
                        this.hasta = busq[3];
                        this.tipo = busq[4];
                        this.ubicacion = busq[5];
                        this.vendedorP = (busq[6] === 'true');
                        this.vendedorE = (busq[7] === 'true');
                    }
                }
                FiltroComponent.prototype.buscar = function () {
                    var palabra = this.busqueda + '+' + this.userProd + '+' + this.desde + '+' + this.hasta + '+' + this.tipo + '+' + this.ubicacion + '+' + this.vendedorP + '+' + this.vendedorE;
                    this.router.navigate(['Buscar', { palabra: palabra }]);
                };
                FiltroComponent = __decorate([
                    core_1.Component({
                        selector: 'filtros-busqueda',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        templateUrl: 'app/filtro.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams])
                ], FiltroComponent);
                return FiltroComponent;
            }());
            exports_1("FiltroComponent", FiltroComponent);
        }
    }
});
//# sourceMappingURL=../../../app/filtro.component.js.map