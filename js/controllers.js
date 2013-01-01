'use strict';

/* Controllers */

function Layout($scope, $route, $routeParams, $location) {
	$scope.$route = $route;
  	$scope.$location = $location;
  	$scope.$routeParams = $routeParams;
	$scope.page = {
		title : '',
		icon : '',
		stats : [
		         {'title': 'orders', 'count': 10392, 'type':'warning'},
		         {'title': 'accounts', 'count': 66401, 'type':'info'},
		         {'title': 'products', 'count': 432, 'type':'success'},
		         {'title': 'notifications', 'count': 2, 'type':'error'}
		         ]
	};
}

function Dashboard($scope, $routeParams) {
	$scope.$parent.page.title = 'Slatwall Dashboard';
	$scope.$parent.page.icon = 'micon-screen';
}

function Pos($scope, $routeParams) {
	$scope.$parent.page.title = 'Point Of Sale';
	$scope.$parent.page.icon = 'micon-cart';
}

function Accounts($scope, $routeParams) {
	$scope.$parent.page.title = 'Accounts';
	$scope.$parent.page.icon = 'micon-user-2';
	
}
function Account($scope, $routeParams) {
	
}

function Products($scope, $routeParams) {
	$scope.$parent.page.title = 'Products';
	$scope.$parent.page.icon = 'micon-tag';
	
}

function Orders($scope, $routeParams) {
	$scope.$parent.page.title = 'Orders';
	$scope.$parent.page.icon = 'micon-folder';
}

function Reports($scope, $routeParams) {
	$scope.$parent.page.title = 'Reports';
	$scope.$parent.page.icon = 'micon-stats-up';
}

function Product($scope, $routeParams) {
	
}

function Settings($scope, $routeParams) {
	$scope.$parent.page.title = 'Settings';
	$scope.$parent.page.icon = 'micon-cog';
}