const ProductController = {};
import { uploadImage } from '../config/cloudinary.js';
import Product from '../model/Product.js';
import fs from 'fs-extra';

ProductController.getProducts = async (request, response) => {
	const products = await Product.find();
	response.json(products);
};

ProductController.addProduct = async (request, response) => {
	const newProduct = new Product(request.body);
	if (request.files?.images) {
		const imagePath = request.files.images.tempFilePath;
		const image = await uploadImage(imagePath);
		newProduct.images.push(image.secure_url);
		fs.removeSync(imagePath);
	}
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
