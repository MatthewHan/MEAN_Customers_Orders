module.exports = function(app) {
  	var customers = require('../controllers/customers.js');
  	var orders = require('../controllers/orders.js');
// Customer
    // Index
	app.get('/customers', function (req, res) { customers.index(req, res) })
	// Create
	.post('/customers', function (req, res) { customers.create(req, res) })	
	// Delete
	.delete('/customers/:id', function (req, res) { customers.destroy(req, res) })
	    // Index
	.get('/orders', function (req, res) { orders.index(req, res) })
	// Create
	.post('/orders', function (req, res) { orders.create(req, res) })	
}