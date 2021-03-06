'use strict';

/* Controllers */

function BindView() {
	
	UpdateScrollingContentSize();
	
	/* Setup Swipe Logic */
	jQuery('#primary-content').find('.swipeable').swipe( {
		swipeStatus:function(event, phase, direction, distance) {
			
			var active = jQuery(this).find('.nav-tabs li.active');
			
			if (direction == "right") {
				var newActive = jQuery(active).prev('li');
			} else if (direction == "left") {
				var newActive = jQuery(active).next('li');
			}
			
			if(jQuery(newActive).length) {
				
				if(jQuery('#sidebar').width() > 40){
					var aoff = 75;
				} else {
					var aoff = 40;
				}
				
				var homeLeft = (jQuery(active).prevAll('li').length * jQuery('#primary-content').width() )*-1;
				
				if( phase=="move" && (direction=="left" || direction=="right") ) {
					if (direction == "left") {
						jQuery(this).find('.swipe-content').css( 'margin-left', (homeLeft - distance) + 'px' );
					} else if (direction == "right") {
						jQuery(this).find('.swipe-content').css( 'margin-left', (homeLeft + distance) + 'px' );
					}
				} else if ( phase == "cancel") {
					jQuery(this).find('.swipe-pane').css( 'left', homeLeft + 'px' );
					jQuery(this).find('.swipe-pane').animate({
						left: homeLeft + 'px'
					});
				} else if ( phase =="end" ) {
					jQuery(this).find('.nav-tabs li').removeClass('active');
					jQuery(newActive).addClass('active');
					console.log(((jQuery(newActive).prevAll('li').length * jQuery('#primary-content').width() )*-1) + 'px');
					jQuery(this).find('.swipe-content').animate({
						'margin-left': ((jQuery(newActive).prevAll('li').length * jQuery('#primary-content').width() )*-1) + 'px'
					},{
						duration: 'fast',
						easing: 'swing'
					});
				}
			}
			
		},
		threshold:5,
		allowPageScroll:"vertical"
	});
	
	jQuery('#primary-content').find('.swipe-content').height( jQuery('#primary-content').height() );
	jQuery('#primary-content').find('.swipe-pane').height( jQuery('#primary-content').height() - 39 );
	jQuery('#primary-content').find('.swipe-pane').width( jQuery('#primary-content').width() );
	
}

function UpdateScrollingContentSize() {
	if(jQuery('#sidebar').width() > 40){
		jQuery('#primary-content').height( jQuery( window ).height() );
		jQuery('#primary-content').width( jQuery( 'body' ).width() - 75 );
	} else {
		jQuery('#primary-content').height( jQuery( window ).height() );
		jQuery('#primary-content').width( jQuery( 'body' ).width() - 40 );
	}
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
	UpdateScrollingContentSize();
}

function Dashboard($scope, $routeParams) {
	$scope.$parent.page.title = 'Slatwall Dashboard';
	$scope.$parent.page.icon = 'micon-screen';
}

function Pos($scope, $routeParams) {
	
}

function Accounts($scope, $routeParams) {
	$scope.accounts = [
		                 {'firstName':'Greg', 'lastName':'Moser', 'emailAddress':'greg@gregmoser.com'},
		                 {'firstName':'Greg', 'lastName':'Moser', 'emailAddress':'greg@gregmoser.com'},
		                 {'firstName':'Greg', 'lastName':'Moser', 'emailAddress':'greg@gregmoser.com'},
		                 {'firstName':'Greg', 'lastName':'Moser', 'emailAddress':'greg@gregmoser.com'},
		                 {'firstName':'Greg', 'lastName':'Moser', 'emailAddress':'greg@gregmoser.com'},
		                 {'firstName':'Greg', 'lastName':'Moser', 'emailAddress':'greg@gregmoser.com'},
		                 {'firstName':'Greg', 'lastName':'Moser', 'emailAddress':'greg@gregmoser.com'},
		                 {'firstName':'Greg', 'lastName':'Moser', 'emailAddress':'greg@gregmoser.com'},
		                 {'firstName':'Greg', 'lastName':'Moser', 'emailAddress':'greg@gregmoser.com'},
		                 {'firstName':'Greg', 'lastName':'Moser', 'emailAddress':'greg@gregmoser.com'},
		                 {'firstName':'Greg', 'lastName':'Moser', 'emailAddress':'greg@gregmoser.com'},
		                 {'firstName':'Greg', 'lastName':'Moser', 'emailAddress':'greg@gregmoser.com'},
		                 {'firstName':'Greg', 'lastName':'Moser', 'emailAddress':'greg@gregmoser.com'},
		                 {'firstName':'Greg', 'lastName':'Moser', 'emailAddress':'greg@gregmoser.com'},
		                 {'firstName':'Greg', 'lastName':'Moser', 'emailAddress':'greg@gregmoser.com'},
		                 {'firstName':'Greg', 'lastName':'Moser', 'emailAddress':'greg@gregmoser.com'},
		                 {'firstName':'Greg', 'lastName':'Moser', 'emailAddress':'greg@gregmoser.com'},
		                 {'firstName':'Greg', 'lastName':'Moser', 'emailAddress':'greg@gregmoser.com'},
		                 {'firstName':'Greg', 'lastName':'Moser', 'emailAddress':'greg@gregmoser.com'},
		                 {'firstName':'Greg', 'lastName':'Moser', 'emailAddress':'greg@gregmoser.com'},
		                 {'firstName':'Greg', 'lastName':'Moser', 'emailAddress':'greg@gregmoser.com'}
		                 ];
	
	BindView();
}
function Account($scope, $routeParams) {
	
}

function Products($scope, $routeParams) {
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