app.controller('MainController', function(){
	console.log("MainController Loaded");
})

app.controller('CustomersController', function(CustomersFactory){
	console.log('CustomersController Loaded');
})

app.controller('OrdersController', function(OrdersFactory){
	console.log('OrdersController Loaded');
})