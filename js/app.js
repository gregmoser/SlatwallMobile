'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/products', {templateUrl: 'views/products.html', controller: Products});
    $routeProvider.when('/orders', {templateUrl: 'views/orders.html', controller: Orders});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
