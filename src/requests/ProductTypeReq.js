import fs from 'fs-extra';

import { uploadImage, destroyImage } from '../config/cloudinary.js';
import ProductType from '../model/ProductType.js';

export const addProductType = async (request, response) => {
	const newProductType = new ProductType(request.body);
	if (request.files?.image) {
		const imagePath = request.files.image.tempFilePath;
		const imageUpload = await uploadImage(imagePath);
		newProductType.image = {
			public_id: imageUpload.public_id,
			secure_url: imageUpload.secure_url
		};
		fs.removeSync(imagePath);
	}
	await newProductType.save();
	response.sendStatus(200);
};

export const updateProductType = async (request, response) => {
	await ProductType.findByIdAndUpdate(request.params.id, request.body);
	response.sendStatus(200);
};

export const deleteProductType = async (request, response) => {
	const productToDelete = await ProductType.findByIdAndDelete(
		request.params.id
	);
	const public_id = productToDelete.image.public_id;
	await destroyImage(public_id);
	response.sendStatus(200);
};
