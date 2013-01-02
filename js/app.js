'use strict';


// Declare app level module which depends on filters, and services
// 'slatwallApp.filters', 'slatwallApp.services', 'slatwallApp.directives'
angular.module('slatwallApp', []).
  config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/dashboard/', {templateUrl: 'views/dashboard.html', controller: Dashboard});
	$routeProvider.when('/pos/', {templateUrl: 'views/pos.html', controller: Pos});
	$routeProvider.when('/accounts/', {templateUrl: 'views/accounts.html', controller: Accounts});
	$routeProvider.when('/account/:accountID/', {templateUrl: 'views/account.html', controller: Account});
	$routeProvider.when('/orders/', {templateUrl: 'views/orders.html', controller: Orders});
    $routeProvider.when('/products/', {templateUrl: 'views/products.html', controller: Products});
    $routeProvider.when('/product/:productID/', {templateUrl: 'views/product.html', controller: Product});
    $routeProvider.when('/reports/', {templateUrl: 'views/reports.html', controller: Reports});
    $routeProvider.when('/settings/', {templateUrl: 'views/settings.html', controller: Settings});
    $routeProvider.otherwise({redirectTo: '/dashboard/'});
  }]);

