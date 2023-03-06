const ProductController = {};
import Product from '../model/Product.js';

ProductController.getProducts = async (request, response) => {
	const products = await Product.find();
	response.json(products);
};

export default ProductController;
