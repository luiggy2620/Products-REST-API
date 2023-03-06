const ProductController = {};

ProductController.sendProducts = (request, response) => {
	response.json({
		name: 'product1'
	});
};

export default ProductController;
