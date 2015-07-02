app.factory('CustomersFactory', function($http){
	return {
		getCustomers: function (callback){
			//console.log('CustomersFactory getCustomers');
			$http.get('/customers').success(function(res){
				callback(res);
			})
		},
		addCustomer: function(newCustomer, callback){
			//console.log("CustomersFactory addCustomer ", newCustomer);
			$http.post('/customers', newCustomer).success(function(res){
				console.log('RESPONSE addCustomer ', res);
				callback(res);
			})
		},
		removeCustomer: function(customer, callback){
			//console.log("CustomersFactory removeCustomer ", customer);
			$http.delete('/customers/'+customer._id).success(function(res){
				callback(res);
			})
		}
	}
})

.factory('OrdersFactory', function($http){
	return {
		getOrders: function(callback){
			console.log('OrdersFactory getOrders');
			$http.get('/orders').success(function(res){
				//console.log('ORDERSFACTORY RES FROM GET ORDERS ', res);
				callback(res);
			})
		},
		addOrder: function(newOrder, callback){
			//console.log("OrdersFactory addOrder ", newOrder);
			$http.post('/orders', newOrder).success(function(res){
				callback(res);
			})

		}
	}
})

.factory('CustomersListFactory', function(CustomersFactory){
	var customers = [];
	return {
		getCustomers: function(){
			CustomersFactory.getCustomers(function(customers){
				that.customers = customers;
			});
		}
	};
})