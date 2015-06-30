var Customer = mongoose.model('Customer');
module.exports = (function(){
	return {
		index: function(req, res){
			console.log("Server/Ctrl/Customers - Index")
		},
		create: function(req, res){
			console.log("Server/Ctrl/Customers - Create")
		},
		delete: function(req, res){
			console.log("Server/Ctrl/Customers - Delete")
		}
	}
})();