var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		controller: 'CustomersController',
		controllerAs: 'customersCtrl',
		templateUrl: '/partials/customers.partial.html'
	})
	.when('/orders', {
		controller: 'OrdersController',
		controllerAs: 'ordersCtrl',
		templateUrl: '/partials/orders.partial.html'
	})
	.otherwise('/')
})