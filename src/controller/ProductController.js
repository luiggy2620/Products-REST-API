const ProductController = {};
import Product from '../model/Product.js';

ProductController.getProducts = async (request, response) => {
	const products = await Product.find();
	response.json(products);
};

ProductController.addProduct = async (request, response) => {
	const newProduct = new Product(request.body);
	await newProduct.save();
	response.sendStatus(200);
};

ProductController.updateProduct = async (request, response) => {
	await Product.findByIdAndUpdate(request.params.id, request.body);
	response.sendStatus(200);
};

ProductController.deleteProduct = async (request, response) => {
	await Product.findByIdAndDelete(request.params.id);
	response.sendStatus(200);
};

export default ProductController;
