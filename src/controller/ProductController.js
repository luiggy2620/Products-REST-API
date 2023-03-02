const ProductController = {};

ProductController.sendProducts = (request, response) => {
	response.json({
		name: 'product1'
	});
};

module.exports = ProductController;
