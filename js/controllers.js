'use strict';

/* Controllers */

function BindView() {
	jQuery('#primary-view').find('.tabbable').swipe( {
		swipeLeft:function(event, direction, distance, duration, fingerCount) {
			jQuery(this).find('.nav-tabs li.active').next('li').find('a').tab('show');
		},
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			jQuery(this).find('.nav-tabs li.active').prev('li').find('a').tab('show');
		},
		threshold:0
	});
}

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
	$scope.products = [
	                 {'productName':'Air Jordan', 'brand.brandName':'Nike', 'productType.productTypeName':'Shoes'},
	                 {'productName':'New Shoe', 'brand.brandName':'Rebok', 'productType.productTypeName':'Shoes'},
	                 {'productName':'F8', 'brand.brandName':'adidas', 'productType.productTypeName':'Shoes'},
	                 {'productName':'Air Jordan', 'brand.brandName':'Nike', 'productType.productTypeName':'Shoes'},
	                 {'productName':'New Shoe', 'brand.brandName':'Rebok', 'productType.productTypeName':'Shoes'},
	                 {'productName':'F8', 'brand.brandName':'adidas', 'productType.productTypeName':'Shoes'},
	                 {'productName':'Air Jordan', 'brand.brandName':'Nike', 'productType.productTypeName':'Shoes'},
	                 {'productName':'New Shoe', 'brand.brandName':'Rebok', 'productType.productTypeName':'Shoes'},
	                 {'productName':'F8', 'brand.brandName':'adidas', 'productType.productTypeName':'Shoes'},
	                 {'productName':'Air Jordan', 'brand.brandName':'Nike', 'productType.productTypeName':'Shoes'},
	                 {'productName':'New Shoe', 'brand.brandName':'Rebok', 'productType.productTypeName':'Shoes'},
	                 {'productName':'F8', 'brand.brandName':'adidas', 'productType.productTypeName':'Shoes'},
	                 {'productName':'Air Jordan', 'brand.brandName':'Nike', 'productType.productTypeName':'Shoes'},
	                 {'productName':'New Shoe', 'brand.brandName':'Rebok', 'productType.productTypeName':'Shoes'},
	                 {'productName':'F8', 'brand.brandName':'adidas', 'productType.productTypeName':'Shoes'},
	                 {'productName':'Air Jordan', 'brand.brandName':'Nike', 'productType.productTypeName':'Shoes'},
	                 {'productName':'New Shoe', 'brand.brandName':'Rebok', 'productType.productTypeName':'Shoes'},
	                 {'productName':'F8', 'brand.brandName':'adidas', 'productType.productTypeName':'Shoes'},
	                 {'productName':'Air Jordan', 'brand.brandName':'Nike', 'productType.productTypeName':'Shoes'},
	                 {'productName':'New Shoe', 'brand.brandName':'Rebok', 'productType.productTypeName':'Shoes'},
	                 {'productName':'F8', 'brand.brandName':'adidas', 'productType.productTypeName':'Shoes'},
	                 {'productName':'Air Jordan', 'brand.brandName':'Nike', 'productType.productTypeName':'Shoes'},
	                 {'productName':'New Shoe', 'brand.brandName':'Rebok', 'productType.productTypeName':'Shoes'},
	                 {'productName':'F8', 'brand.brandName':'adidas', 'productType.productTypeName':'Shoes'},
	                 {'productName':'Air Jordan', 'brand.brandName':'Nike', 'productType.productTypeName':'Shoes'},
	                 {'productName':'New Shoe', 'brand.brandName':'Rebok', 'productType.productTypeName':'Shoes'},
	                 {'productName':'F8', 'brand.brandName':'adidas', 'productType.productTypeName':'Shoes'}
	                 ];
	$scope.brands = [
	                 {brandName:'Nike'},
	                 {brandName:'adidas'},
	                 {brandName:'Rebok'}
	                 ];
	$scope.promotions = [
	                 {promotionName:'Weekly Special'},
	                 {promotionName:'New Years Deal'}
	                 ];
	BindView();
}

function Product($scope, $routeParams) {
	
}

function Orders($scope, $routeParams) {
	$scope.$parent.page.title = 'Orders';
	$scope.$parent.page.icon = 'micon-drawer-2';
}

function Reports($scope, $routeParams) {
	$scope.$parent.page.title = 'Reports';
	$scope.$parent.page.icon = 'micon-stats-up';
}


function Settings($scope, $routeParams) {
	$scope.$parent.page.title = 'Settings';
	$scope.$parent.page.icon = 'micon-cog';
}