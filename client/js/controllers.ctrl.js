app.controller('CustomersController', function(CustomersFactory, customersList){
	//console.log('CustomersController Loaded');
	that = this;
	that.customers = customersList.getCustomers();
	that.searchWord = {};
	// var getCustomers = function(){
	// 	//console.log("CustomersController getCustomers");
	// 	CustomersFactory.getCustomers(function(customers){
	// 		that.customers = customers;
	// 	});
	// }

	this.addCustomer = function(newCustomer){
		//console.log("newUser param ", newCustomer);
		if(newCustomer){
			CustomersFactory.addCustomer(newCustomer, function(){
				that.customers = customersList.getCustomers();
				
			})
			that.newCustomer = {};
		}
	}
	this.removeCustomer = function(customer){
		//console.log("CustomersController removeCustomer ", customer);
		CustomersFactory.removeCustomer(customer, function(){
			that.customers = customersList.getCustomers();
		});
	}
})

app.controller('OrdersController', function(OrdersFactory, customersList){
	//console.log('OrdersController Loaded');
	that = this;
	that.orders = [];
	that.customers = customersList.getCustomers();
	that.searchWord = {};
	var getOrders = function(){
		console.log("OrdersController getOrders");
		OrdersFactory.getOrders(function(orders){
			that.orders = orders;
			console.log('orderscontroller orders ' ,that.orders);
		});
	}
	this.addOrder = function(newOrder){
		//console.log("newOrder param ", newOrder);
		if(newOrder){
			OrdersFactory.addOrder(newOrder, function(){
				getOrders();
			})
			that.newOrder = {};
		}
	}
	getOrders();

})