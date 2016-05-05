import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app/app.component';
import {provide} from 'angular2/core';
import {UserService} from './app/user.service';
import {BrowserXhr} from 'angular2/http';
import {
	ROUTER_PROVIDERS,
	RouteConfig,
	ROUTER_DIRECTIVES,
	LocationStrategy,
	HashLocationStrategy
} from 'angular2/router';

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
	UserService,
  provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
