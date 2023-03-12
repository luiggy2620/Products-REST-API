import Product from '../model/Product.js';

const lookupTypes = {
	from: 'producttypes',
	localField: '_id',
	foreignField: 'productId',
	as: 'productTypes'
};

export const getProductsToShow = async (request, response) => {
	const products = await Product.aggregate([
		{
			$lookup: lookupTypes
		},
		{
			$addFields: {
				firstProductType: {
					$arrayElemAt: ['$productTypes', 0]
				}
			}
		},
		{
			$project: {
				productId: 0,
				description: 0,
				tags: 0,
				reviews: 0,
				productTypes: 0,
				'firstProductType._id': 0,
				'firstProductType.productId': 0,
				'firstProductType.subtitle': 0,
				'firstProductType.amount': 0
			}
		}
	]);
	response.json(products);
};

export const getProductsAndTypes = async (request, response) => {
	const products = await Product.aggregate([
		{
			$lookup: lookupTypes
		},
		{
			$project: {
				productId: 0,
				'productTypes.productId': 0,
				'productTypes.subtitle': 0,
				'productTypes.amount': 0
			}
		}
	]);
	response.json(products);
};
