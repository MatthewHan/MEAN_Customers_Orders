app.controller('CustomersController', [ 'CustomersFactory', 'CustomersListFactory', function(CustomersFactory, CustomersListFactory){
	//console.log('CustomersController Loaded');
	that = this;
	this.customers = CustomersListFactory.getCustomers();
	this.searchWord = {};
	this.errors = [];
	// var getCustomers = function(){
	// 	//console.log("CustomersController getCustomers");
	// 	CustomersFactory.getCustomers(function(customers){
	// 		that.customers = customers;
	// 	});
	// }

	this.addCustomer = function(newCustomer){
		this.errors=[];
		//console.log("newUser param ", newCustomer);
		if(newCustomer){
			CustomersFactory.addCustomer(newCustomer, function(res){
				if(res.status == false) {that.errors.push(res.error)}
				this.customers = CustomersListFactory.getCustomers();
			})
			that.newCustomer = {};
		}
	}
	this.removeCustomer = function(customer){
		//console.log("CustomersController removeCustomer ", customer);
		CustomersFactory.removeCustomer(customer, function(){
			this.customers = CustomersListFactory.getCustomers();
		});
	}
}])

app.controller('OrdersController', ['OrdersFactory','CustomersListFactory', function(OrdersFactory, CustomersListFactory){
	//console.log('OrdersController Loaded');
	that = this;
	this.orders = [];
	this.customers = CustomersListFactory.getCustomers();
	this.searchWord = {};
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

}])