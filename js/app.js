'use strict';


// Declare app level module which depends on filters, and services
// 'slatwallApp.filters', 'slatwallApp.services', 'slatwallApp.directives'
angular.module('slatwallApp', []).
  config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/dashboard', {templateUrl: 'views/dashboard.html', controller: Dashboard});
    $routeProvider.when('/products', {templateUrl: 'views/products.html', controller: Products});
    $routeProvider.when('/orders', {templateUrl: 'views/orders.html', controller: Orders});
    $routeProvider.otherwise({redirectTo: '/dashboard'});
  }]);