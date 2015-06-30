app.factory('CustomersFactory', function($http){
	return {
		getCustomers: function (callback){
			console.log('CustomersFactory getCustomers');
			var customers = [{name:'Bo Jackson', created_at:'hello'}];
			callback(customers);
		}
		// addCustomer: function(customer){
		// 	for(i in customers){
  //        		if(customers[i].name == customer.name){
  //           		errormessage = 'Customer already exists';
  //           		return errormessage;
  //        		}
  //     		}
  //     		customers.push(customer);
		// }
  //  		removeCustomer: function(item){
  //  			customers.splice(customers.indexOf(item),1);
  //  		}
	}
})

// app.factory('OrdersFactory', function($http){
// 	return {
		
// 	}
// })