module.exports = function(app) {
  	var customers = require('../controllers/customers.js');
  	var orders = require('../controllers/orders.js');
// Customer
    // Index
	app.get('/customers', function(request, response) { customers.index(req, res) })
	// Create
	.post('/customers', function(request, response) { customers.create(req, res) })	
	// Delete
	.delete('/customers/:id', function(request, response) { customers.delete(req, res) })
	    // Index
	.get('/orders', function(request, response) { orders.index(req, res) })
	// Create
	.post('/orders', function(request, response) { orders.create(req, res) })	
}