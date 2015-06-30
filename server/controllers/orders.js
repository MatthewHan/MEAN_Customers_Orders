var Customer = mongoose.model('Order');
module.exports = (function(){
	return {
		index: function(req, res){
			console.log("Server/Ctrl/Orders - Index")
		},
		create: function(req, res){
			console.log("Server/Ctrl/Orders - Create")
		}
	}
})();