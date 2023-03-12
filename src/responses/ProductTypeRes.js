import ProductType from '../model/ProductType.js';

export const getProductTypes = async (request, response) => {
	const productTypes = await ProductType.find();
	response.json(productTypes);
};
