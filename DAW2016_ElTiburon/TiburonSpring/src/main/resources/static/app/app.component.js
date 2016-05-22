System.register(['angular2/core', 'angular2/router', './main.component', 'ng2-bootstrap/ng2-bootstrap', './header.component', './footer.component', './mis-productos.component', './login.component', './mensajes.component', './buscar.component', './user.service', './mensajes.service', './product.service', './follow.service', './producto.component', './product.mod.component', './public.profile.component', './valoracion.service', 'angular2/http'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, main_component_1, ng2_bootstrap_1, header_component_1, footer_component_1, mis_productos_component_1, login_component_1, mensajes_component_1, buscar_component_1, user_service_1, mensajes_service_1, product_service_1, follow_service_1, producto_component_1, product_mod_component_1, public_profile_component_1, valoracion_service_1, http_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (main_component_1_1) {
                main_component_1 = main_component_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (mis_productos_component_1_1) {
                mis_productos_component_1 = mis_productos_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (mensajes_component_1_1) {
                mensajes_component_1 = mensajes_component_1_1;
            },
            function (buscar_component_1_1) {
                buscar_component_1 = buscar_component_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (mensajes_service_1_1) {
                mensajes_service_1 = mensajes_service_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            },
            function (follow_service_1_1) {
                follow_service_1 = follow_service_1_1;
            },
            function (producto_component_1_1) {
                producto_component_1 = producto_component_1_1;
            },
            function (product_mod_component_1_1) {
                product_mod_component_1 = product_mod_component_1_1;
            },
            function (public_profile_component_1_1) {
                public_profile_component_1 = public_profile_component_1_1;
            },
            function (valoracion_service_1_1) {
                valoracion_service_1 = valoracion_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(router, users, mensajes, products, follows) {
                    this.router = router;
                    this.users = users;
                    this.mensajes = mensajes;
                    this.products = products;
                    this.follows = follows;
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: 'app/app.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES, ng2_bootstrap_1.Alert, header_component_1.HeaderComponent, footer_component_1.FooterComponent],
                        providers: [user_service_1.UserService, mensajes_service_1.MensajesService, product_service_1.ProductService, follow_service_1.FollowService, valoracion_service_1.ValorationService, http_1.HTTP_PROVIDERS]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Inicio', component: main_component_1.MainComponent, useAsDefault: true },
                        { path: '/novedades', name: 'Novedades', component: buscar_component_1.BuscarComponent },
                        { path: '/mis-productos', name: 'MisProductos', component: mis_productos_component_1.MisProductosComponent },
                        { path: '/mensajes', name: 'Mensajes', component: mensajes_component_1.MensajesComponent },
                        { path: '/mensajes/:id', name: 'MensajesUser', component: mensajes_component_1.MensajesComponent },
                        { path: '/login', name: 'Login', component: login_component_1.LoginComponent },
                        { path: '/busqueda/:palabra', name: 'Buscar', component: buscar_component_1.BuscarComponent },
                        { path: '/producto/:id', name: 'Producto', component: producto_component_1.ProductoComponent },
                        { path: '/producto/edit/:id', name: 'EditarProducto', component: product_mod_component_1.ProductModComponent },
                        { path: '/producto/nuevo', name: 'NuevoProducto', component: product_mod_component_1.ProductModComponent },
                        { path: '/profile/:type/:id', name: 'Profile', component: public_profile_component_1.PublicProfileComponent }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService, mensajes_service_1.MensajesService, product_service_1.ProductService, follow_service_1.FollowService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=../../../app/app.component.js.map