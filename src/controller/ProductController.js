const ProductController = {};
import Product from '../model/Product.js';

ProductController.getProducts = async (request, response) => {
	const products = await Product.find();
	response.json(products);
};

ProductController.addProduct = async (request, response) => {
	const { title, description, price, amount, tags, images, types } =
		request.body;
	const newProduct = new Product({
		title,
		description,
		price,
		amount,
		tags,
		images,
		types
	});
	await newProduct.save();
	response.sendStatus(200);
};

ProductController.deleteProduct = async (request, response) => {
	await Product.findByIdAndDelete(request.params.id);
	response.sendStatus(200);
};

export default ProductController;
