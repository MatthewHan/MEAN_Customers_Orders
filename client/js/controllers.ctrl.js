app.controller('CustomersController', function(CustomersFactory){
	console.log('CustomersController Loaded');
	that = this;
	that.customers = [];
	that.searchWord = {};
	var getCustomers = function(){
		console.log("CustomerssController getCustomers");
		CustomersFactory.getCustomers(function(customers){
			console.log(this);
			that.customers = customers;
		});
	}
	getCustomers();
	// CustomersFactory.getCustomers(function(data){
	//    	that.customers=data;
	//    	console.log(that.customers);
	// })
	// this.addCustomer = function(newCustomer){
	//     this.errormessage = CustomersFactory.addCustomer(newCustomer);
	//     console.log('controller' + this.errormessage);
	//     this.newCustomer = {};
	// }
	// this.removeCustomer = function(item){
	//     CustomersFactory.removeCustomer(item)
	// }
})

// app.controller('OrdersController', function(OrdersFactory){
// 	console.log('OrdersController Loaded');
// })