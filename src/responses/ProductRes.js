import Product from "../model/Product.js";

export const getProducts = async (request, response) => {
	const products = await Product.find();
	response.json(products);
};