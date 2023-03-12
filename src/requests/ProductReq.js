import Product from "../model/Product.js";

export const addProduct = async (request, response) => {
	const newProduct = new Product(request.body);
	await newProduct.save();
	response.sendStatus(200);
};

export const updateProduct = async (request, response) => {
	await Product.findByIdAndUpdate(request.params.id, request.body);
	response.sendStatus(200);
};

export const deleteProduct = async (request, response) => {
	await Product.findByIdAndDelete(request.params.id);
	response.sendStatus(200);
};